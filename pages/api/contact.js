// Next.js API route for WhileStone Estate contact inquiries
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, purpose, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message fields are required.',
      });
    }

    // In a production setup, this would dispatch an email or store in CRM
    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully by WhileStone Estate.',
      data: {
        name,
        email,
        phone: phone || 'Not provided',
        purpose: purpose || 'general',
        timestamp: new Date().toISOString(),
      },
      supportContact: {
        primaryPhone: '+1 (800) 555-0199',
        alternativePhone: '+1 (800) 555-0144',
        primaryEmail: 'info@whilestone-estate.com',
        alternativeEmail: 'support@whilestone-estate.com',
      },
    });
  }

  // Handle GET requests with contact metadata
  return res.status(200).json({
    brand: 'WhileStone Estate',
    primaryContact: {
      phone: '+1 (800) 555-0199',
      email: 'info@whilestone-estate.com',
      address: '100 WhileStone Boulevard, Suite 400, Beverly Hills, CA 90210',
    },
    alternativeContact: {
      phone: '+1 (800) 555-0144',
      whatsapp: '+1 (555) 987-6543',
      email: 'support@whilestone-estate.com',
      address: '742 Evergreen Terrace, Downtown Financial District, New York, NY 10001',
    },
    operatingHours: {
      weekdays: '8:30 AM - 6:30 PM EST',
      saturday: '10:00 AM - 4:00 PM EST',
      sunday: 'Concierge by appointment',
    },
  });
}

