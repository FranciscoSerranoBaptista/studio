# EmailJS Template for Strategic Assessment

## ✅ Current Setup
The strategic assessment form now uses your existing EmailJS configuration, just like the diagnostic modal.

## 📧 EmailJS Template Variables
Your EmailJS template should include these variables to format the assessment data:

```html
<h2>🎯 Strategic Assessment Request - {{executive_name}}</h2>

<h3>Executive Details</h3>
<p><strong>Name:</strong> {{executive_name}}</p>
<p><strong>Title:</strong> {{executive_title}}</p>
<p><strong>Organization:</strong> {{executive_organization}}</p>
<p><strong>Email:</strong> {{executive_email}}</p>
<p><strong>Phone:</strong> {{executive_phone}}</p>

<h3>Transition Context</h3>
<p><strong>Context:</strong> {{transition_context}}</p>
<p><strong>Timeline:</strong> {{urgency_timeline}}</p>

<h3>Strategic Questions</h3>
<p><strong>What's at stake?</strong></p>
<p>{{stakes_question}}</p>

<p><strong>What would make this valuable?</strong></p>
<p>{{valuable_assessment}}</p>

<h3>Complexity Indicators</h3>
<p><strong>P&L Responsibility:</strong> {{pl_responsibility}}</p>
<p><strong>Team Size (Direct):</strong> {{team_size_direct}}</p>
<p><strong>Team Size (Total):</strong> {{team_size_total}}</p>
<p><strong>Geographic Scope:</strong> {{geographic_scope}}</p>
<p><strong>Matrix Complexity:</strong> {{matrix_complexity}}</p>

<h3>Next Steps</h3>
<p>{{booking_reminder}}</p>
<p><strong>Submitted:</strong> {{timestamp}}</p>
```

## 🔧 Setup Instructions

1. **Use Existing EmailJS**: The form uses the same service/template/key as your diagnostic modal
2. **Update Template**: Add the variables above to your EmailJS template  
3. **Test**: Submit a form and check your email

## 💡 Template Options

**Option 1**: Update your existing template to handle both diagnostic and assessment requests
**Option 2**: Create a separate template specifically for strategic assessments and update the `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` for assessments

## 🚀 Ready to Go!
The form now:
- ✅ Sends emails via EmailJS 
- ✅ Includes all assessment data
- ✅ Uses your existing configuration
- ✅ Has proper loading states
- ✅ Handles errors gracefully

Just update your EmailJS template with the variables above and you'll receive detailed assessment requests!