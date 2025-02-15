import { supabase } from "@/supabase/supabase";

export async function signinwithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth-callback`,
    },
  });

  if (error) throw new Error(error.message);

  return data;
}



export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
