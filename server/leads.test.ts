import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("leads router", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    const ctx = createPublicContext();
    caller = appRouter.createCaller(ctx);
  });

  it("should create a lead with valid input", async () => {
    const leadData = {
      nome: "João Silva",
      regiao: "Caçapava",
      whatsapp: "11999999999",
    };

    const result = await caller.leads.create(leadData);

    expect(result).toBeDefined();
    expect(result.nome).toBe(leadData.nome);
    expect(result.regiao).toBe(leadData.regiao);
    expect(result.whatsapp).toBe(leadData.whatsapp);
    expect(result.id).toBeDefined();
    expect(result.createdAt).toBeDefined();
  });

  it("should reject lead with empty nome", async () => {
    const leadData = {
      nome: "",
      regiao: "Caçapava",
      whatsapp: "11999999999",
    };

    try {
      await caller.leads.create(leadData);
      expect.fail("Should have thrown an error");
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toContain("Nome");
      }
    }
  });

  it("should reject lead with invalid whatsapp", async () => {
    const leadData = {
      nome: "João Silva",
      regiao: "Caçapava",
      whatsapp: "123",
    };

    try {
      await caller.leads.create(leadData);
      expect.fail("Should have thrown an error");
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toContain("WhatsApp");
      }
    }
  });

  it("should reject lead with non-numeric whatsapp", async () => {
    const leadData = {
      nome: "João Silva",
      regiao: "Caçapava",
      whatsapp: "11 99999-9999",
    };

    try {
      await caller.leads.create(leadData);
      expect.fail("Should have thrown an error");
    } catch (error: unknown) {
      expect(error).toBeDefined();
    }
  });

  it("should retrieve all leads", async () => {
    await caller.leads.create({
      nome: "Maria Santos",
      regiao: "São José dos Campos",
      whatsapp: "11988888888",
    });

    const leads = await caller.leads.list();

    expect(Array.isArray(leads)).toBe(true);
    expect(leads.length).toBeGreaterThanOrEqual(1);
    expect(leads[0]).toHaveProperty("nome");
    expect(leads[0]).toHaveProperty("regiao");
    expect(leads[0]).toHaveProperty("whatsapp");
    expect(leads[0]).toHaveProperty("createdAt");
  });

  it("should create multiple leads successfully", async () => {
    const lead1 = await caller.leads.create({
      nome: "Test Lead 1",
      regiao: "Jacareí",
      whatsapp: "11987777777",
    });

    expect(lead1).toBeDefined();
    expect(lead1.id).toBeDefined();

    const lead2 = await caller.leads.create({
      nome: "Test Lead 2",
      regiao: "Outra",
      whatsapp: "11986666666",
    });

    expect(lead2).toBeDefined();
    expect(lead2.id).toBeDefined();
  });
});
