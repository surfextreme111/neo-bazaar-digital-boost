
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
  planId?: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would be a call to your backend API
    // For now, we'll mock a successful response
    console.log('Submitting form data:', formData);
    
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful response
    return {
      success: true,
      message: 'Tu información ha sido recibida. Nos pondremos en contacto contigo pronto.'
    };
    
    // Actual implementation would be something like:
    /*
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    return data;
    */
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Hubo un error al enviar tu información. Por favor, inténtalo de nuevo más tarde.'
    };
  }
};
