# Seiri del Mar × BLINKITA — Living Experience Prototype

A standalone, private concept prototype for discussion. It is not the official Seiri del Mar website and does not imply a partnership, approval, confirmed booking availability, or a finalized guest package.

## What's included in this prototype

- Responsive Seiri del Mar concept website with a Caribbean editorial visual direction.
- Traditional Maya Tzolk'in daily widget and reflection popup, using the 584283 correlation constant and the Guatemalan day-name spellings currently selected for this prototype. The calculation, glyph artwork, and interpretive copy must be checked and approved against Blinkita's preferred traditional method before public release. The sign artwork is abstract concept art, not an authentic Maya glyph.
- Interactive “Find your experience” guide that suggests a direction from the guest’s interests and available time, without pretending to confirm a booking.
- Searchable/filterable catalogue of 45 individual BLINKITA offerings using the supplied descriptions, session lengths and prices, including bodywork, energy and ancient wisdom, personal transformation, ceremonies and creative/take-home experiences.
- Experience program cards using the figures and distinctions shown in the supplied BLINKITA experience catalogue:
  - Signature Stays: 1, 3, 5, 7 and 9 program days.
  - Transformational Retreats: 5, 7 and 9 days, with program/facilitation fees shown separately from accommodation and resort operations.
  - Living Time Journeys: 13, 20 and 33 days; pricing and dates are marked as enquiry/confirmation required because the catalogue does not specify a price.
  - Online and distance experience categories with availability and pricing marked as requiring confirmation.
- Filters for Signature Stays, Retreats and Living Time Journeys.
- “Save to My Seiri” interest buttons.
- A local memory journal where a guest can save a title, reflection and optional compressed photo.
- Tzolk'in reflections and journal entries are shown in the My Seiri area and can be deleted.
- PWA manifest, icon and service worker for an installable prototype on supported browsers.

## Important limitations

- This is a front-end prototype only. There are no real guest accounts, cross-device sync, database, bookings, payments, booking availability, CRM, staff dashboard, or secure user authentication.
- Saved notes, saved interests and photos stay in the current browser/device via localStorage. Clearing browser storage can remove them. Do not use sensitive or private information in this demonstration.
- Photos are compressed client-side, but local browser storage is limited; very large or numerous photos may fail to save.
- The service worker/PWA install experience requires HTTPS or localhost. External photography and Google Fonts need an internet connection.
- Program pricing and exclusions reflect the supplied catalogue, not a final retail package. Seiri del Mar must confirm accommodation, meals, transfers, excursions, logistics, dates, operational capacity, and final package terms.
- The traditional Tzolk'in widget and all cultural wording should be reviewed by Blinkita before being shown publicly.

## How to preview

Open `index.html` in a modern browser for a quick local preview. For service-worker and install testing, serve the folder over localhost or HTTPS.

## Strategic next build

After the resort approves the concept and the data model, develop a secure standalone account layer with guest consent, privacy controls, cloud-synced memories, saved experiences, booking enquiries and post-stay follow-up. This version intentionally does not connect to Supabase, YOUNIQUE or any external database.
