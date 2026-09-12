```markdown

\# The Craft Social



The Craft Social is a youth skill center in Hassan Lashkari, Garden West, Karachi. We teach three crafts: intricate henna design, contemporary stitching, and editorial makeup. Courses run in small groups on a rolling two-week schedule, with options for in-person studio practice or live online sessions with kits shipped to students.



This repository holds the public website. It is a static, multi-page site built by hand with semantic HTML5, a single shared stylesheet, and plain vanilla JavaScript. There is no build step, no framework, and no dependency other than Google Fonts.



\## Pages



\- \*\*index.html\*\* is the landing page. It has the studio pitch, three reasons to study here, and a short teaser for home services.

\- \*\*courses.html\*\* lists the three courses, a materials breakdown for each, a toggle between online and offline mode, and a live-filterable schedule of upcoming batches.

\- \*\*fees.html\*\* shows transparent monthly rates per course, home service pricing, and an interactive fee calculator.

\- \*\*home-services.html\*\* covers bridal henna, stitching pickups, and event makeup at the client's home, with a booking form.

\- \*\*enroll.html\*\* is the course enrollment form with a confirmation state.



\## What is interactive



\- The navigation bar picks up a background after 50 pixels of scroll.

\- The mode toggle on the courses page rewrites the badge on each course card.

\- The search field above the schedule table filters rows as the user types.

\- The fee calculator reads the course dropdown and mode radios and updates the total instantly.

\- Two form handlers, one for course enrollment and one for home service bookings, swap the form for a thank-you message on submit.



\## Deployment



The site is hosted on Netlify. Pushing to the main branch of this repository triggers a redeploy automatically.



\## Folder structure



```

the-craft-social/

├── index.html

├── courses.html

├── home-services.html

├── fees.html

├── enroll.html

├── style.css

├── script.js

└── images/

&#x20;   ├── henna-hand.jpg

&#x20;   ├── sewing-tools.jpg

&#x20;   ├── makeup-brush.jpg

&#x20;   ├── craft-desk.jpg

&#x20;   └── laptop-notebook.jpg

```



\## Contact



laybaakrem@gmail.com

```

