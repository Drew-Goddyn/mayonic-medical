---
layout: page
title: Contact Us
permalink: /contact/
---

# Get in Touch

## Contact Information

**Phone:** {{ site.phone }}  
**Email:** {{ site.email }}  
**Address:** {{ site.address }}

## Hours

<div class="hours-table">
  <div class="day-row">
    <div class="day">Monday</div>
    <div class="hours">{{ site.hours.monday }}</div>
  </div>
  <div class="day-row">
    <div class="day">Tuesday</div>
    <div class="hours">{{ site.hours.tuesday }}</div>
  </div>
  <div class="day-row">
    <div class="day">Wednesday</div>
    <div class="hours">{{ site.hours.wednesday }}</div>
  </div>
  <div class="day-row">
    <div class="day">Thursday</div>
    <div class="hours">{{ site.hours.thursday }}</div>
  </div>
  <div class="day-row">
    <div class="day">Friday</div>
    <div class="hours">{{ site.hours.friday }}</div>
  </div>
  <div class="day-row">
    <div class="day">Saturday</div>
    <div class="hours">{{ site.hours.saturday }}</div>
  </div>
  <div class="day-row">
    <div class="day">Sunday</div>
    <div class="hours">{{ site.hours.sunday }}</div>
  </div>
</div>

## Request an Appointment

<form class="contact-form" id="contact-form" action="https://formspree.io/f/yourformid" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone">
  </div>
  
  <div class="form-group">
    <label for="subject">Service</label>
    <select id="subject" name="subject">
      <option value="initial-consultation">Initial Consultation</option>
      <option value="nutrition">Nutrition Services</option>
      <option value="behavioral">Behavioral Health</option>
      <option value="medical">Medical Treatment</option>
      <option value="information">General Information</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4" required></textarea>
  </div>
  
  <div class="form-group">
    <button type="submit" class="button primary-button">Submit</button>
  </div>
</form>

<div class="note">
  <p><strong>Note:</strong> For medical emergencies, please call 911.</p>
</div>

## Location

<div class="map-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0!2d-122.0!3d47.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAyJzM5LjAiTiAxMjLCsDAxJzMzLjkiVw!5e0!3m2!1sen!2sus!4v1647000000000!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>

## Parking & Accessibility

Free parking is available in our dedicated lot for all patients and visitors. Our facility is fully accessible, with accommodations for patients of all sizes and mobility levels. 