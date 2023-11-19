import { Session } from "@supabase/supabase-js";
import { signal } from "@preact/signals-react";

export const user = signal<Session["user"] | undefined>(undefined);
