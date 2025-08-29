import { createHash } from 'crypto';

interface MailchimpSubscriber {
  email_address: string;
  status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
  merge_fields?: {
    FNAME?: string;
    LNAME?: string;
    PLAN?: string;
  };
  tags?: string[];
}

export async function addToMailchimp(subscriber: MailchimpSubscriber) {
  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_AUDIENCE_ID) {
      console.error('❌ Missing Mailchimp environment variables');
      return { success: false, error: 'Missing Mailchimp configuration' };
    }

    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    // Create MD5 hash of email (Mailchimp requirement)
    const emailHash = createHash('md5').update(subscriber.email_address.toLowerCase()).digest('hex');

    const response = await fetch(url, {
      method: 'PUT', // PUT for upsert (create or update)
      headers: {
        'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: subscriber.email_address,
        status: subscriber.status,
        merge_fields: subscriber.merge_fields,
        tags: subscriber.tags || ['monthly-subscriber'],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Mailchimp API error:', errorData);
      return { success: false, error: errorData.detail || 'Failed to add to Mailchimp' };
    }

    const data = await response.json();
    console.log('✅ Successfully added to Mailchimp:', data.email_address);
    
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error adding to Mailchimp:', error);
    return { success: false, error: 'Mailchimp integration failed' };
  }
}

export async function addMonthlySubscriber(email: string, firstName?: string, lastName?: string) {
  return addToMailchimp({
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstName || '',
      LNAME: lastName || '',
      PLAN: 'Monthly Plan',
    },
    tags: ['monthly-subscriber', 'fairy-tale-community'],
  });
}
