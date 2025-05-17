import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

const { MessageCircle, X, Send } = LucideIcons;

// In the handleSubmit function
setTimeout(() => {
  setChatHistory(prev => [...prev, {
    type: 'bot', 
    text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please call us at +1 (520) 869-9777."
  }]);
}, 1000);
