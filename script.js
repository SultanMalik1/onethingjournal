// Get the form elements
const emailInput = document.getElementById('email');
const onethingContainer = document.getElementById('onethingContainer');
const onethingQuestion = document.getElementById('onethingQuestion');
const onethingInput = document.getElementById('onething');
const monthAccomplishmentContainer = document.getElementById('monthAccomplishmentContainer');
const monthAccomplishmentQuestion = document.getElementById('monthAccomplishmentQuestion');
const monthAccomplishmentInput = document.getElementById('monthAccomplishment');
const weekAccomplishmentContainer = document.getElementById('weekAccomplishmentContainer');
const weekAccomplishmentQuestion = document.getElementById('weekAccomplishmentQuestion');
const weekAccomplishmentInput = document.getElementById('weekAccomplishment');
const accomplishmentContainer = document.getElementById('accomplishmentContainer');
const accomplishmentQuestion = document.getElementById('accomplishmentQuestion');
const accomplishmentInput = document.getElementById('accomplishment');
const improvementContainer = document.getElementById('improvementContainer');
const improvementQuestion = document.getElementById('improvementQuestion');
const improvementInput = document.getElementById('improvement');
const gratitudeContainer = document.getElementById('gratitudeContainer');
const gratitudeQuestion = document.getElementById('gratitudeQuestion');
const gratitudeInput = document.getElementById('gratitude');

// Hide all the containers initially
onethingContainer.style.display = 'none';
monthAccomplishmentContainer.style.display = 'none';
weekAccomplishmentContainer.style.display = 'none';
accomplishmentContainer.style.display = 'none';
improvementContainer.style.display = 'none';
gratitudeContainer.style.display = 'none';

//Show the one thing container when email is entered
emailInput.addEventListener('change', () => {
  onethingContainer.style.display = 'block';
});



// Show the month accomplishment container when one thing is submitted
function submitOnething() {
  const onething = onethingInput.value.trim();
  if (onething) {
    onethingContainer.style.display = 'none';
    monthAccomplishmentContainer.style.display = 'block';
  }
}

// Show the week accomplishment container when month accomplishment is submitted
function submitMonthAccomplishment() {
  const monthAccomplishment = monthAccomplishmentInput.value.trim();
  if (monthAccomplishment) {
    monthAccomplishmentContainer.style.display = 'none';
    weekAccomplishmentContainer.style.display = 'block';
  }
}

// Show the accomplishment container when week accomplishment is submitted
function submitWeekAccomplishment() {
  const weekAccomplishment = weekAccomplishmentInput.value.trim();
  if (weekAccomplishment) {
    weekAccomplishmentContainer.style.display = 'none';
    accomplishmentContainer.style.display = 'block';
  }
}

// Show the gratitude container when accomplishment is submitted
function submitAccomplishment() {
  const accomplishment = accomplishmentInput.value.trim();
  if (accomplishment) {
    accomplishmentContainer.style.display = 'none';
    gratitudeContainer.style.display = 'block';
  }
}

// Show the improvement container when gratitude is submitted
function submitGratitude() {
  const gratitude = gratitudeInput.value.trim();
  if (gratitude) {
    gratitudeContainer.style.display = 'none';
    improvementContainer.style.display = 'block';
  }
}

// Submit the form when improvement is submitted
function submitImprovement() {
  const improvement = improvementInput.value.trim();
  if (improvement) {
    document.form1.submit();
  }
}
