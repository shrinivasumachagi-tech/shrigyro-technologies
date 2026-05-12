# EmailJS Utility Functions Reference

## 📦 Import

```typescript
import { sendEmail, validateFormData, type EmailFormData } from '@/utils/email';
```

---

## 🎯 Functions

### 1. `sendEmail(data: EmailFormData)`

Sends an email inquiry and auto-response to client.

**Parameters:**
```typescript
interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
  projectType?: string;
}
```

**Returns:**
```typescript
Promise<{
  success: boolean;
  message?: string;
  error?: unknown;
}>
```

**Example:**
```typescript
const result = await sendEmail({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+91 9876543210',
  service: 'AI & Automation',
  message: 'I need help with my project',
  company: 'Tech Corp'
});

if (result.success) {
  console.log('Email sent successfully!');
} else {
  console.error('Error:', result.error);
}
```

---

### 2. `validateFormData(data: FormData)`

Validates form data before submission.

**Parameters:**
```typescript
interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  company?: string;
  projectType?: string;
}
```

**Returns:**
```typescript
{
  valid: boolean;
  errors: string[];
}
```

**Example:**
```typescript
const validation = validateFormData(formState);

if (!validation.valid) {
  validation.errors.forEach(error => {
    console.log(error);
  });
}
```

**Validation Rules:**
- Name: 2+ characters
- Email: Valid email format
- Phone: Valid international format
- Message: 10+ characters
- Service: Non-empty

---

## 🧪 Usage in Components

### Complete Example

```typescript
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { sendEmail, validateFormData, type EmailFormData } from '@/utils/email';

export const MyForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI & Automation',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const validation = validateFormData(formData);
    if (!validation.valid) {
      validation.errors.forEach(error => {
        toast.error(error);
      });
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending...');

    try {
      const result = await sendEmail(formData as EmailFormData);

      if (result.success) {
        toast.success('Sent successfully!', { id: toastId });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'AI & Automation',
          message: '',
        });
      } else {
        toast.error('Failed to send', { id: toastId });
      }
    } catch (error) {
      toast.error('Error occurred', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};
```

---

## 🔔 Toast Notifications

Toast notifications are automatically shown by the utility:

```typescript
// Success
toast.success('Your inquiry has been submitted successfully!');

// Error
toast.error('Please enter a valid email address');

// Loading
const toastId = toast.loading('Sending your inquiry...');
```

---

## ✅ Best Practices

1. **Always validate before sending:**
   ```typescript
   const validation = validateFormData(formData);
   if (!validation.valid) return;
   ```

2. **Use loading state:**
   ```typescript
   const toastId = toast.loading('Sending...');
   // ... send email
   toast.success('Done!', { id: toastId });
   ```

3. **Handle errors gracefully:**
   ```typescript
   try {
     const result = await sendEmail(data);
     if (!result.success) {
       toast.error(result.error?.toString());
     }
   } catch (error) {
     toast.error('Unexpected error');
   }
   ```

4. **Disable form during submission:**
   ```typescript
   <input disabled={isSubmitting} />
   <button disabled={isSubmitting}>Send</button>
   ```

5. **Reset form after success:**
   ```typescript
   if (result.success) {
     setFormData({ name: '', email: '', ... });
   }
   ```

---

## 🚀 Performance Tips

1. **Memo components with forms:**
   ```typescript
   export const MyForm = React.memo(() => { ... });
   ```

2. **Debounce form changes (optional):**
   ```typescript
   const handleChange = debounce((value) => {
     setFormData(prev => ({ ...prev, email: value }));
   }, 300);
   ```

3. **Cache validation results:**
   ```typescript
   const [validationErrors, setValidationErrors] = useState<string[]>([]);
   ```

---

## 🔐 Security Notes

- Never log sensitive data
- Always use environment variables for credentials
- Validate on both client and server
- Sanitize user input before display
- Use HTTPS in production

---

## 📞 Common Patterns

### Pattern 1: Simple Form Submission
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await sendEmail(formData);
  if (result.success) {
    // Success action
  }
};
```

### Pattern 2: With Toast Tracking
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  const toastId = toast.loading('Sending...');
  
  const result = await sendEmail(formData);
  
  result.success 
    ? toast.success('Done!', { id: toastId })
    : toast.error('Failed!', { id: toastId });
};
```

### Pattern 3: With Validation
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const validation = validateFormData(formData);
  if (!validation.valid) {
    validation.errors.forEach(err => toast.error(err));
    return;
  }
  
  const result = await sendEmail(formData);
  // Handle result
};
```

---

## 🐛 Debugging

Enable detailed logging:

```typescript
// In development, check console for:
// - EmailJS configuration status
// - Validation errors
// - API response details
console.log('EmailJS initialized');
console.log('Validation errors:', validation.errors);
console.log('Send result:', result);
```

---

## 📚 Related Files

- `src/utils/email.ts` - Main utility file
- `src/pages/Contact/index.tsx` - Contact form example
- `src/components/ui/QueryModal.tsx` - Modal form example
- `.env` - Environment variables
- `EMAILJS_SETUP_GUIDE.md` - Complete setup guide

---

**Version:** 1.0
**Last Updated:** 2024
