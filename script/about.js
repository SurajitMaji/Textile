
// Get all member boxes
let members = document.querySelectorAll('.each-member');

members.forEach(member => {
  // Find the details box inside this member
  let details = member.querySelector('.member-details');

  // When mouse enters → show details
  member.addEventListener('mouseenter', () => {
    details.style.visibility = 'visible';
    details.style.width = "150px";
    details.style.height = "150px";
    details.style.top = "0px";
  });

  // When mouse leaves → hide details
  member.addEventListener('mouseleave', () => {
    details.style.visibility = 'hidden';
    details.style.width = "0px";
    details.style.height = "0px";
    details.style.top = "75px";
  });
});
