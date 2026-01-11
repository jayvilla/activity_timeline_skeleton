export type EventType =
  | "note.created"
  | "note.updated"
  | "task.created"
  | "integration.synced"
  | "error";

export interface AuditEvent {
  id: string;
  type: EventType;
  title: string;
  actor?: { id: string; name: string };
  createdAt: string;
  metadata?: Record<string, unknown>;
}

