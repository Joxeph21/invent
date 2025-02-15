import { supabase } from "@/supabase/supabase";
import type { BusinessFormValues } from "@/utils/Types";

export async function getStoreAPI(id: string) {
  const { data: Store, error } = await supabase
    .from("store")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return Store;
}

export async function updateStore({
  id,
  values,
}: {
  id: string;
  values: BusinessFormValues;
}) {
  const { data, error } = await supabase
    .from("store")
    .update(values)
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);

  return data;
}
