---
title: "Capturing Your Users' Needs"
excerpt: "Short stories telling the future of Snapping Rails"
coverImage: "/assets/blog/user-stories/cover.jpg"
date: "2022-03-15T09:07:11.301Z"
author:
  name: Matt Thornton
  picture: "/assets/blog/authors/matt.png"
ogImage:
  url: "/assets/blog/user-stories/cover.jpg"
---

## Defining Features

This week, one of our exercises was to define three features for our umbrella projects and assign each acceptance criteria to be met before being allowed to be merged into "production". [Click here to view the exercise.](https://github.com/engineerkit/engineerkit/blob/main/exercises/automated-testing/defining-features.md)

## #1021 - Map Marker Filtering

**Story:** As a user, I would like to be able to choose which specific types of markers on the map I would like to view with a set of checkboxes.

**Acceptance Criteria:**

- A toolbox is placed on top of the map, and within is a set of checkboxes with a box for each marker type. Each box is labeled.
- All checkboxes begin checked by default.
- If a box is unchecked, remove those markers from our markers array and the map.
- If a box is checked, fetch the new markers by markers ID and add them to the map.
- Upon box check, display loading spinner and do not allow additional checking/unchecking until fetch is completed.

**Possible Tests:**

- That unchecking a box removes markers with marker_type = X from the markers array.
- That the URL created for fetching new markers is correct. (ex: http://localhost:5000/markers?marker_type=4)
- That while a markers fetch is being performed that checkboxes are disabled.

## #1022 - Profile Pages

**Story:** As a user, I would like to visit other users' profile pages. I would like to see their posts and information about them.

**Mockup:**
<img alt="A mockup of a Snapping Rails user's  profile page" src="/assets/blog/user-stories/profile-mockup.png"/>

**Acceptance Criteria:**

- A new layout for the profile page has been created that reflects the mockup.
- Page will pull information about a user based on URL search parameter. (ex: http://localhost:5000/profile?user=Matt)
- If a user has added links to other social media sites in their account settings, they will show below their profile picture.
- A rail stats panel that shows how many posts a user has made and how old their account is. This can/will be expanded later to the show number of subscribers, likes, etc.
- A Railmap component that loads just the posts of the user the profile belongs to.

**Possible Tests:**

- Social media buttons/links render if various URLs are specified.
- Check that, given various searchParams provided, that the fetch request URLs are formed correctly.

## #1023 - Marker Icons

**Story:** As a user, I would like different types of markers on the map to be represented by unique icons.

**Acceptance Criteria:**

Implementing any one of the two will be sufficient for now, but lean towards the first criterion.

- Create a component for each type of marker. Each component file will have its own LeafIcon definition. This will allow for different markers to have different marker bodies in the future as well (important for event markers). Place a conditional inside of `markers.map()` to render the correct type of marker given the `marker_type` value.

- Place conditional logic inside of `<MapMarker>` to determine which iconURL and shadowURL to use based on its marker_type. Define the URLs in a dictionary in `constants.js`.

**Possible Tests:**

- Based on lists of markers, check that the markers placed on the map have the correct iconURL and shadowURL in its `L.marker.icon` attributes (`marker.getIcon()` can be used here).

### Expect to see these on Snapping Rails soon!
