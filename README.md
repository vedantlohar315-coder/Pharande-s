# Dr Pharande Dental Clinic — Website

A responsive, static website for Dr Pharande Dental Clinic in Bhosari, Pune. It is built with plain HTML, CSS and JavaScript, so it can be published directly with GitHub Pages without a build step.

## Files

- `index.html` — main clinic website and SEO metadata
- `enquiry.html` — dedicated appointment / enquiry form that opens a prefilled WhatsApp message
- `styles.css` — layout, responsive styling and animations
- `script.js` — mobile navigation, reveal effects and contact links
- `assets/clinic-exterior.jpg` — clinic exterior photo supplied for this project
- `assets/before-after-illustrative.jpg` — generated illustrative smile comparison (not a real patient case)
- `assets/clinic-mark.svg` — clinic mark
- `assets/config.js` — clinic phone and WhatsApp number settings (preconfigured with +91 70286 57619)

## Contact and enquiry flow

The clinic number is configured as **+91 70286 57619**. The number is clickable for phone calls, and the WhatsApp links open a conversation with the clinic. The `enquiry.html` page contains a form; when a visitor submits it, the browser opens WhatsApp with the visitor details and enquiry prefilled. The visitor must review and tap **Send** in WhatsApp.

This is a static GitHub Pages website. The form does not store enquiries in a database or send them to a server. To change the number later, edit `assets/config.js`:

```js
window.CLINIC_CONFIG = {
  whatsapp: "91XXXXXXXXXX", // digits only, include country code
  phone: "+91XXXXXXXXXX",
  email: ""
};
```

Use the clinic's verified contact details only.

## Publish with GitHub Pages

1. Extract this ZIP on your computer.
2. Create a new GitHub repository, for example `dr-pharande-dental-clinic`.
3. Open the `dr_pharande_dental_site` folder in the extracted ZIP and upload its contents (including `index.html`, `enquiry.html`, `styles.css`, `script.js` and the `assets` folder) to the repository root. Make sure `index.html` is at the root, not inside an extra nested folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. GitHub will display the published website URL in the Pages section once deployment completes.

## Important content notes

- The supplied doctor profile lists Dr. Shantanu Pharande as BDS, MDS (Periodontics), Dental Surgeon, Implantologist and Periodontist, with 11 years of overall experience (8 years as a specialist). The supplied profile lists BDS from SDM College of Dental Sciences, Dharwad (2014) and MDS - Periodontics from D. Y. Patil Dental College & Hospital, Pune (2019).
- The clinic location was supplied as Bhosari, Pune. A full street address and opening hours were not provided, so they have not been invented. The phone number used is the number supplied for this website update: +91 70286 57619.
- The smile comparison is AI-generated and explicitly labelled illustrative. It must not be represented as a real patient result. Replace it with genuine clinic photographs only when the clinic has appropriate patient consent and accurate treatment details.
- Confirm all services and contact details with the clinic before launch.

## Preview locally

Open `index.html` in a browser. For the best local preview, use a simple local static server, but no build or package installation is required.
