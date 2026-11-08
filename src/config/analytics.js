import { supabase } from './Supabase';

export async function recordPortfolioEvent(eventType, projectId = null) {
  try {
    const { error } = await supabase.rpc('record_portfolio_event', {
      p_event_type: eventType,
      p_project_id: projectId
    });

    if (error) {
      console.error(`Unable to record portfolio event "${eventType}":`, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Unable to record portfolio event "${eventType}":`, error);
    return false;
  }
}
