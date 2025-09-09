<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <!-- To make this contact form work, create your free access key from https://web3forms.com/
     Then you will get all form submissions in your email inbox. -->
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation"
    novalidate
  >
    <input
      type="hidden"
      name="access_key"
      value="fcbf2071-369b-432b-81ca-ca6bc723abd0"
    />
    <!-- Create your free access key from https://web3forms.com/ -->
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <input type="hidden" name="subject" value="Computer Service Enquiry">
    <div class="mb-5">
      
      <input
        type="text"
        placeholder="Full Name"
        required
        class="sm:w-full lg:w-1/2 px-4 py-3 border-2 placeholder:text-InputPrimary rounded-md outline-none focus:ring-4 border-InputBorder focus:border-InputBorderFocus ring-InputBorderRing"
        name="name"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your full name.
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">Email Address</label
      ><input
        id="email_address"
        type="email"
        placeholder="Email Address"
        name="email"
        required
        class="sm:w-full w-1/2 px-4 py-3 border-2 placeholder:text-InputPrimary rounded-md outline-none focus:ring-4 border-InputBorder focus:border-InputBorderFocus ring-InputBorderRing"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your email address.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid email address.
      </div>
    </div>
    <div class="mb-3">
      <textarea
        name="message"
        required
        placeholder="Your Message"
        class="sm:w-full w-1/2 px-4 py-3 border-2 placeholder:text-InputPrimary rounded-md outline-none h-36 focus:ring-4 border-InputBorder focus:border-InputBorderFocus ring-InputBorderRing"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please enter your Data Recovery query.
      </div>
    </div>
    <LandingButton type="submit" styleName="primary" size="lg" block
      >Request Service</LandingButton
    >
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
