# Quick EmailJS Implementation Guide

## ⚡ Add EmailJS to Any Form - 5 Minutes

---

## Step 1: Import Required Dependencies

```typescript
import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendEmail, validateFormData, type EmailFormData } from '@/utils/email';
import { Loader } from 'lucide-react';
```

---

## Step 2: Set Up Form State

```typescript
const [isSubmitting, setIsSubmitting] = useState(false);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  service: 'AI & Automation',
  message: '',
  // Add optional fields:
  company: '',
  projectType: 'Not specified',
});
```

---

## Step 3: Create Submit Handler

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate form
  const validation = validateFormData(formData);
  if (!validation.valid) {
    validation.errors.forEach((error) => {
      toast.error(error);
    });
    return;
  }

  setIsSubmitting(true);
  const toastId = toast.loading('Sending your inquiry...');

  try {
    const result = await sendEmail(formData as EmailFormData);

    if (result.success) {
      toast.success(
        'Your inquiry has been submitted successfully!',
        { id: toastId }
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'AI & Automation',
        message: '',
        company: '',
        projectType: 'Not specified',
      });
    } else {
      toast.error(
        'Failed to send. Please try again.',
        { id: toastId }
      );
    }
  } catch (error) {
    toast.error('Something went wrong.', { id: toastId });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Step 4: Create Form JSX

```typescript
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Name Field */}
  <div className="space-y-2">
    <label className="text-sm font-bold">Full Name *</label>
    <input
      type="text"
      required
      placeholder="John Doe"
      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      disabled={isSubmitting}
    />
  </div>

  {/* Email Field */}
  <div className="space-y-2">
    <label className="text-sm font-bold">Email Address *</label>
    <input
      type="email"
      required
      placeholder="john@example.com"
      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      disabled={isSubmitting}
    />
  </div>

  {/* Phone Field */}
  <div className="space-y-2">
    <label className="text-sm font-bold">Phone Number *</label>
    <input
      type="tel"
      required
      placeholder="+91 9876543210"
      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10"
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      disabled={isSubmitting}
    />
  </div>

  {/* Service Dropdown */}
  <div className="space-y-2">
    <label className="text-sm font-bold">Service Interested In *</label>
    <select
      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10"
      value={formData.service}
      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
      disabled={isSubmitting}
    >
      <option>AI & Automation</option>
      <option>ERP Systems</option>
      <option>Embedded & IoT</option>
      <option>Robotics Solutions</option>
      <option>LabVIEW Automation</option>
      <option>Academic Projects</option>
      <option>Web Development</option>
      <option>Custom Development</option>
    </select>
  </div>

  {/* Message Field */}
  <div className="space-y-2">
    <label className="text-sm font-bold">Message *</label>
    <textarea
      rows={5}
      required
      placeholder="Tell us about your requirements..."
      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 resize-none"
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      disabled={isSubmitting}
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
  >
    {isSubmitting ? (
      <>
        <Loader size={18} className="animate-spin" />
        Sending...
      </>
    ) : (
      'Send Inquiry'
    )}
  </button>
</form>
```

---

## Complete Component Example

```typescript
import React, { useState } from 'react';
import { Loader, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendEmail, validateFormData, type EmailFormData } from '@/utils/email';

export const MyInquiryForm: React.FC = () => {
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
      validation.errors.forEach((error) => {
        toast.error(error);
      });
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your inquiry...');

    try {
      const result = await sendEmail(formData as EmailFormData);

      if (result.success) {
        toast.success(
          'Your inquiry has been submitted successfully!',
          { id: toastId }
        );
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'AI & Automation',
          message: '',
        });
      } else {
        toast.error('Failed to send. Please try again.', { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-bold">Full Name *</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-lg border"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold">Email Address *</label>
        <input
          type="email"
          required
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-lg border"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold">Phone Number *</label>
        <input
          type="tel"
          required
          placeholder="+91 9876543210"
          className="w-full px-4 py-3 rounded-lg border"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold">Service *</label>
        <select
          className="w-full px-4 py-3 rounded-lg border"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          disabled={isSubmitting}
        >
          <option>AI & Automation</option>
          <option>ERP Systems</option>
          <option>Embedded & IoT</option>
          <option>Robotics Solutions</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold">Message *</label>
        <textarea
          rows={5}
          required
          placeholder="Tell us about your requirements..."
          className="w-full px-4 py-3 rounded-lg border resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
};

export default MyInquiryForm;
```

---

## Minimal Configuration

The only things needed:

1. ✅ Environment variables in `.env`
2. ✅ `sendEmail` import from `@/utils/email`
3. ✅ `toast` import from `react-hot-toast`
4. ✅ Form state management
5. ✅ Submit handler

---

## Testing Your Form

1. Fill in all required fields
2. Click submit
3. Check for:
   - ✅ Loading toast appears
   - ✅ Success toast shows
   - ✅ Email arrives at admin
   - ✅ Auto-response sent to client

---

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| "Email service not configured" | Check `.env` variables |
| Toast not showing | Ensure `<Toaster />` in `App.tsx` |
| Form not submitting | Check validation errors in console |
| No email received | Verify Service ID and Template ID |

---

## Next Steps

1. Copy this pattern to any form
2. Adjust field names as needed
3. Test with sample data
4. Deploy to production

---

**Ready to go!** 🚀
