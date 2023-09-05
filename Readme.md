# SuitePulse (Hotel Management System)

"SuitePulse" is a fictional small boutique hotel with 8 luxurious wooden cabins.
Stakeholders need a custom-built application to manage everything about the hotel: bookings, cabins, and guests.
This SaaS solution powered by ReactJS library and its ecosystem consists of of an internal application used inside the hotel to check in guests as they arrive.

### Project's requirements

- Users of the app are **hotel employees**. They need to be logged into the application to perform tasks
- New users can only be signed up inside the applications (to guarantee that only actual hotel employees can get accounts)
- Users should be able to upload an avatar, and change their credentials
- App needs a table view with all the cabins, showing the cabin photo, name, capacity, price and current discount
- The booking status can be "unconfirmed" (booked but not yet checked in), "checked in", or "checked out". The table should be filterable by this important status
- Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price
- Users should be able to delete, check in, or check out a booking as the guest arrives (no editing necessary for now)
- Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and then confirm that payment has been received (inside the app)
- On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn't already
- Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification
- The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
  - A list of guests checking in and out on the current day. Users should be able to perform these tasks from here
  - Statistics on recent bookings, sales, check ins, and occupancy rate
  - A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment)
  - A chart showing statistics on stay durations, as this is an important metric for the hotel
- Users should be able to define a few application-wide settings:
  - breakfast price
  - min and max nights/booking
  - max guests/booking
- App needs the feature of toggling between light and dark mode

### Technology

- **Routing**
- **Remote State Management**
- **UI State Management**
- **Form Management**
- **Database**
- **Styling**
- **Other**

#### Getting started

1. Ensure you have NodeJS installed and up to date
2. After clonning this repository, open the terminal and execute the following command: `npm install`

#### Running the project

1. In the terminal run: `npm run dev`
2. Once the deployment succeeds, open the application at [localhost:5173](http://localhost:5173) (default of Vite environment)
3. Use the following demo credentials to login:
   a) Email: test@test.com
   b) Password: react123

#### Limitations

- For educational purposes, the application communicates only with the API of Supabase for reading bookings data. Since it does not include the interaction with external public bookings APIs, CRUD operations for the "bookings" feature are partially supported (read-only capabilities). Instead, this application can be evaluated by taking leverage of "Uploader" react component (sample data) within the "Sidebar" parent component .
