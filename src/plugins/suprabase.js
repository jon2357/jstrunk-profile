import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_DB_ENDPOINT;
const supabaseKey = import.meta.env.VITE_DB_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { insertFormData };

async function insertFormData(formName, formJson) {
  try {
    const { data, error } = await supabase
      .from("form_input")
      .insert([{ form_name: formName, form_data: formJson }]);

    return error || data;
  } catch (err) {
    console.error(err);
  }
}
