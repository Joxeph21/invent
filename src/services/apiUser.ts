import { supabase } from "@/supabase/supabase";

export async function getUserSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session)
    throw new Error(error?.message || "No Session Found");

  const user = data?.session;

  return user;
}

export async function getUserAPI() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
