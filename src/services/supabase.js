import { createClient } from '@supabase/supabase-js';

// Secure environment variables - NEVER hardcode credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Initialize Supabase client with additional options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Lead management service
export const leadsService = {
  async createLead(leadData) {
    console.log('Tentativo di invio lead a Supabase:', leadData);
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([{
          ...leadData,
          created_at: new Date().toISOString(),
          status: 'new'
        }])
        .select();

      if (error) {
        console.error('Supabase error creating lead:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      console.log('Lead creato con successo:', data);
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('Lead creation error:', error);
      return { success: false, error: error.message };
    }
  },

  async getLeads() {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching leads:', error);
      return { success: false, error: error.message };
    }
  }
};

// Service requests management
export const serviceRequestsService = {
  async createServiceRequest(requestData) {
    try {
      const { data, error } = await supabase
        .from('service_requests')
        .insert([{
          ...requestData,
          created_at: new Date().toISOString(),
          status: 'pending'
        }])
        .select();

      if (error) {
        console.error('Supabase error creating service request:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      return { success: true, data: data[0] };
    } catch (error) {
      console.error('Service request creation error:', error);
      return { success: false, error: error.message };
    }
  },

  async getServiceRequests() {
    try {
      const { data, error } = await supabase
        .from('service_requests')
        .select(`
          *,
          leads (
            first_name,
            last_name,
            email,
            phone
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching service requests:', error);
      return { success: false, error: error.message };
    }
  }
};

export default supabase;
