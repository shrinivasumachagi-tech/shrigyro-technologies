# EmailJS Integration Setup Guide

## 📧 Overview

Complete EmailJS integration is configured for ShriGyro Technologies website. All form submissions (Contact Form, Query Modal, and other inquiry forms) automatically send emails directly to **shrinivas.r.u@gmail.com**.

---

## 🚀 Quick Start

### 1. **Create EmailJS Account**

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. **Get Your Credentials**

#### Step 1: Get Service ID
1. Go to **Email Services** in the dashboard
2. Click **Add Service**
3. Select **Gmail** (or your preferred email service)
4. Follow the authentication steps
5. Copy your **Service ID** (format: `service_xxxxx`)

#### Step 2: Create Template ID
1. Go to **Email Templates**
2. Click **Create New Template**

##### Template Configuration

**Template Name:** `shrigyro_inquiry_template` (or your preferred name)

**Template Content (HTML):**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            background: white;
            padding: 20px;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin: 15px 0;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        .field:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: bold;
            color: #2563eb;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .value {
            margin-top: 5px;
            color: #555;
        }
        .cta {
            background: #2563eb;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin-top: 15px;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #999;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        .auto-response {
            background: #f0fdf4;
            border-left: 4px solid #10b981;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        {{#if message_type 'auto-response'}}
        <!-- AUTO-RESPONSE EMAIL TO CLIENT -->
        <div class="header">
            <h1>Thank You for Contacting ShriGyro!</h1>
        </div>
        <div class="content">
            <p>Dear {{client_name}},</p>
            
            <p>We have successfully received your inquiry and appreciate your interest in ShriGyro Technologies.</p>
            
            <div class="auto-response">
                <strong>What happens next?</strong>
                <p>Our team will review your requirements and contact you within 24 hours. We look forward to discussing your project!</p>
            </div>

            <p><strong>About ShriGyro Technologies:</strong></p>
            <ul>
                <li>AI & Automation Solutions</li>
                <li>ERP Systems Development</li>
                <li>Embedded Systems & IoT</li>
                <li>LabVIEW Automation</li>
                <li>Academic Solutions</li>
            </ul>

            <p>If you have any urgent questions, feel free to reach out:</p>
            <ul>
                <li>📧 Email: shrinivas.r.u@gmail.com</li>
                <li>📱 Phone: +91 74116 78188</li>
                <li>💬 WhatsApp: https://wa.me/917411678188</li>
            </ul>

            <p>Best regards,<br><strong>ShriGyro Technologies Team</strong></p>
        </div>
        {{/if}}

        {{#if message_type 'inquiry'}}
        <!-- ADMIN NOTIFICATION EMAIL -->
        <div class="header">
            <h1>New Inquiry Received</h1>
        </div>
        <div class="content">
            <p><strong>New inquiry submission on {{timestamp}}</strong></p>

            <div class="field">
                <div class="label">Client Name</div>
                <div class="value">{{from_name}}</div>
            </div>

            <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:{{from_email}}">{{from_email}}</a></div>
            </div>

            <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">{{phone_number}}</div>
            </div>

            <div class="field">
                <div class="label">Company / College Name</div>
                <div class="value">{{company_name}}</div>
            </div>

            <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value">{{service}}</div>
            </div>

            <div class="field">
                <div class="label">Project Type</div>
                <div class="value">{{project_type}}</div>
            </div>

            <div class="field">
                <div class="label">Message / Requirements</div>
                <div class="value">{{message}}</div>
            </div>

            <p style="margin-top: 20px; text-align: center;">
                <a href="mailto:{{from_email}}" class="cta">Reply to {{from_name}}</a>
            </p>
        </div>
        {{/if}}

        <div class="footer">
            <p>ShriGyro Technologies - Professional Engineering Solutions</p>
            <p>© {{year}} All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

**Email Template Variables:**
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{phone_number}}` - Client's phone
- `{{company_name}}` - Company/College name
- `{{service}}` - Service selected
- `{{project_type}}` - Project type
- `{{message}}` - Client's message/requirements
- `{{timestamp}}` - Submission timestamp
- `{{client_name}}` - Client's name (for auto-response)
- `{{to_name}}` - Recipient name
- `{{message_type}}` - Type of email (inquiry/auto-response)

3. Copy your **Template ID** (format: `template_xxxxx`)

#### Step 3: Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (format: `xxxxxxxxxxxx`)

### 3. **Configure Environment Variables**

Update `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Replace:**
- `service_xxxxx` with your Service ID
- `template_xxxxx` with your Template ID
- `your_public_key_here` with your Public Key

### 4. **Test Your Setup**

1. Start the development server: `npm run dev`
2. Navigate to the Contact page or trigger the Query Modal
3. Fill out the form with test data
4. Submit the form
5. Check both:
   - Your inbox (should receive inquiry email)
   - Test email address (should receive auto-response)

---

## 📋 Form Fields Included

### Contact Form & Query Modal
- **Full Name** ✅ Required
- **Email Address** ✅ Required
- **Phone Number** ✅ Required
- **Company/College Name** (Optional)
- **Service Interested In** ✅ Required
  - AI & Automation
  - ERP Systems
  - Embedded & IoT
  - Robotics Solutions
  - LabVIEW Automation
  - Academic Solutions
  - Web Development
  - Custom Development
- **Project Type** (Optional)
  - Academic Project
  - Commercial Project
  - IoT Solution
  - AI/ML Project
  - Web Application
  - Mobile Application
  - Hardware Integration
  - Consultation
- **Message/Requirements** ✅ Required (min 10 characters)

---

## 🔍 Validation Rules

All forms include **automatic validation**:

| Field | Rule | Error Message |
|-------|------|---------------|
| Name | 2+ characters | "Please enter a valid name" |
| Email | Valid email format | "Please enter a valid email" |
| Phone | Valid phone format | "Please enter a valid phone number" |
| Message | 10+ characters | "Message should be at least 10 characters" |
| Service | Required | "Please select a service" |

---

## 🎯 Email Flow

### When a client submits a form:

1. **Form Validation** → Validates all required fields
2. **Admin Email** → Sends inquiry to `shrinivas.r.u@gmail.com`
   - Includes all client details
   - Timestamp of submission
   - Complete requirements/message
3. **Auto-Response** → Sends confirmation to client
   - Professional auto-response message
   - Contact information for follow-up
   - No reply needed, just confirmation
4. **Firebase Backup** → Stores data in Firebase (as backup)
5. **User Feedback** → Shows success/error toast

---

## 🔐 Security Features

✅ **Environment Variables** - Credentials stored securely in `.env`
✅ **Form Validation** - All inputs validated before sending
✅ **Error Handling** - Graceful error messages
✅ **No Hardcoding** - Never hardcode API keys in components
✅ **Toast Notifications** - User-friendly feedback messages
✅ **Loading States** - Shows sending status with spinner

---

## 🎨 Toast Notifications

The system shows styled toast notifications:

- **Success (Green):** "Your inquiry has been submitted successfully..."
- **Error (Red):** Specific validation or submission errors
- **Loading:** "Sending your inquiry..." with spinner
- **Position:** Top-right corner of screen
- **Duration:** 4 seconds (auto-dismiss)

---

## 📞 Forms Integrated

### 1. **Contact Page** (`/contact`)
   - Full contact form with all fields
   - Glassmorphism design
   - Side panel with contact info

### 2. **Query Modal** (Popup)
   - Appears automatically after 3 seconds
   - Can be triggered via button
   - Two-column layout with visual sidebar

### 3. **Other Forms** (Ready for integration)
   - Any new form can use `sendEmail()` utility
   - Just import and call the function

---

## 🚨 Troubleshooting

### Issue: "Email service is not properly configured"
**Solution:** Check that all three environment variables are set in `.env`

### Issue: "Failed to send email"
**Solution:** 
1. Verify Service ID, Template ID, and Public Key
2. Check that EmailJS account is active
3. Verify email address has proper Gmail permissions

### Issue: Auto-response email not received
**Solution:** Auto-response failures don't block the main submission. The inquiry still reaches the admin email.

### Issue: Validation errors appear immediately
**Solution:** 
1. Ensure Name is at least 2 characters
2. Email must be valid format (user@domain.com)
3. Phone must be valid international format
4. Message must be at least 10 characters

---

## 📧 Email Customization

To customize email templates:

1. Go to EmailJS Dashboard → **Email Templates**
2. Edit the template
3. Modify HTML/CSS as needed
4. Test with form submission
5. The changes apply immediately

### Common Customizations:
- Change colors/branding
- Add company logo
- Modify auto-response message
- Add additional fields
- Change email styling

---

## ✅ Deployment Checklist

Before deploying to production:

- [ ] All environment variables set in production `.env`
- [ ] EmailJS Service ID verified
- [ ] EmailJS Template ID verified
- [ ] EmailJS Public Key verified
- [ ] Test email submission in staging
- [ ] Verify admin email receives inquiries
- [ ] Verify client receives auto-response
- [ ] Check form validation works
- [ ] Test on mobile devices
- [ ] Verify toast notifications appear

---

## 📚 Files Modified

- `src/utils/email.ts` - Email utility with validation
- `src/pages/Contact/index.tsx` - Contact form updated
- `src/components/ui/QueryModal.tsx` - Query modal updated
- `src/App.tsx` - Toaster provider added
- `.env` - Environment variables configured

---

## 🔗 Useful Links

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/template/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Email Validation Best Practices](https://www.emailjs.com/blog/email-validation/)

---

## 📞 Support

For questions about EmailJS integration:
1. Check EmailJS Dashboard logs
2. Review browser console for errors
3. Verify all credentials are correct
4. Contact EmailJS support if needed

---

**Last Updated:** 2024
**Status:** ✅ Production Ready
