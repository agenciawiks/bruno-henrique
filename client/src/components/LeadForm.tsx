import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const leadFormSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório").min(3, "Nome deve ter pelo menos 3 caracteres"),
  regiao: z.string().min(1, "Região é obrigatória"),
  whatsapp: z.string().min(10, "WhatsApp inválido").regex(/^\d+$/, "WhatsApp deve conter apenas números"),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

const REGIOES = [
  "Caçapava",
  "São José dos Campos",
  "Jacareí",
  "Pindamonhangaba",
  "Guaratinguetá",
  "Cruzeiro",
  "Lorena",
  "Aparecida",
  "Outra",
];

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createLeadMutation = trpc.leads.create.useMutation();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      nome: "",
      regiao: "",
      whatsapp: "",
    },
  });

  async function onSubmit(values: LeadFormValues) {
    setIsSubmitting(true);
    try {
      await createLeadMutation.mutateAsync(values);
      toast.success("Adesivo do Bolsonaro será enviado em breve!");
      form.reset();
    } catch (error) {
      console.error("Error creating lead:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold text-gray-800">Nome Completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome"
                  {...field}
                  className="border-2 border-green-600 focus:border-yellow-500 focus:ring-yellow-500 text-base"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="regiao"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold text-gray-800">Região</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                <FormControl>
                  <SelectTrigger className="border-2 border-green-600 focus:border-yellow-500 focus:ring-yellow-500 text-base">
                    <SelectValue placeholder="Selecione sua região" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {REGIOES.map((regiao) => (
                    <SelectItem key={regiao} value={regiao}>
                      {regiao}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold text-gray-800">WhatsApp</FormLabel>
              <FormControl>
                <Input
                  placeholder="11999999999"
                  {...field}
                  className="border-2 border-green-600 focus:border-yellow-500 focus:ring-yellow-500 text-base"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 text-lg transition-colors duration-200"
        >
          {isSubmitting ? "Enviando..." : "Ganhe seu Adesivo do Bolsonaro"}
        </Button>
      </form>
    </Form>
  );
}
