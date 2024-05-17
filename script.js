const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

const errorText1 = document.getElementById("error-text-1");
const errorText2 = document.getElementById("error-text-2");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

const regex = /^[a-z0-9]+@[a-z]+.com$/;
const check = (inputValue) => {
  const result = regex.test(inputValue);
  return result;
};

btn1.onclick = () => {
  if (check(input1.value)) {
    alert("You've successfully signed up! Check your inbox!");
    input1.classList.remove("error-input");
    errorText1.style.display = "none";
    input1.value = "";
  } else {
    input1.classList.add("error-input");
    errorText1.style.display = "block";
  }
};

btn2.onclick = () => {
  if (check(input2.value)) {
    alert("You've successfully signed up! Check your inbox!");
    input2.classList.remove("error-input");
    errorText2.style.display = "none";
    input2.value = "";
  } else {
    input2.classList.add("error-input");
    errorText2.style.display = "block";
  }
};

const observer1 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("grow");
      observer1.unobserve(entries[0].target);
    } else {
      entries[0].target.classList.remove("grow");
    }
  },
  { threshold: 1 }
);
observer1.observe(btn1);

const observer2 = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("shake");
      observer2.unobserve(entries[0].target);
    } else {
      entries[0].target.classList.remove("shake");
    }
    console.log(entries[0].isIntersecting);
  },
  { rootMargin: "0px 0px -200px 0px", threshold: 1 }
);
observer2.observe(btn2);
