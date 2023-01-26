$(document).ready(function () {
  // write all back end and form related js here...

  // Navigation active links
  var current = location.pathname;
  current = current.replace("/", "");

  // console.log(current);
  var headerMenuLi = $(".site-header .nav-menu li");
  var accountMenuLi = $(".account-nav li");
  activeNavLinkFunc(headerMenuLi);
  activeNavLinkFunc(accountMenuLi);

  function activeNavLinkFunc(el) {
    var anchorLinks = el.find("a");
    var firstListChild = el.first();

    if (current !== "") {
      $(el).removeClass("active");

      anchorLinks.each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr("href") === current) {
          $this.parent().addClass("active");
        }
      });
    } else {
      firstListChild.addClass("active");
    }
  }

  // Newsletter Form
  $("#newsletterForm").validate({
    rules: {
      nf_email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    messages: {
      nf_email: {
        required: "This field is required",
        pattern: "Please enter a valid email.",
      },
    },
    submitHandler: function (form, e) {
      e.preventDefault();
      // form.submit();
      form.reset();
    },
  });

  // CONTACT FORM
  $("#contactForm").validate({
    rules: {
      cf_phone: {
        required: true,
        pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      },
      cf_email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    messages: {
      cf_phone: {
        required: "This field is required.",
        pattern: "Please enter a valid phone number.",
      },
      cf_email: {
        required: "This field is required.",
        pattern: "Please enter a valid email.",
      },
    },
    submitHandler: function (form, e) {
      e.preventDefault();
      form.reset();
    },
  });

  // LOGIN FORM
  $("#loginForm").validate({
    rules: {
      lf_email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    messages: {
      lf_email: {
        required: "This field is required.",
        pattern: "Please enter a valid email.",
      },
    },
    submitHandler: function (form, e) {
      e.preventDefault();
      form.reset();
    },
  });

  // REGISTER FORM
  $("#registerForm").validate({
    rules: {
      rf_phone: {
        required: true,
        pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      },
      rf_email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    messages: {
      rf_phone: {
        required: "This field is required.",
        pattern: "Please enter a valid phone number.",
      },
      rf_email: {
        required: "This field is required.",
        pattern: "Please enter a valid email.",
      },
    },
    submitHandler: function (form, e) {
      e.preventDefault();
      form.reset();
    },
  });

  // ADD ADDRSSS FORM
  $("#addAddressForm").validate({
    rules: {
      aaf_phone: {
        required: true,
        pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      },
      aaf_email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      aaf_pin: {
        required: true,
        pattern: /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,
      },
    },
    messages: {
      aaf_phone: {
        required: "This field is required.",
        pattern: "Please enter a valid phone number.",
      },
      aaf_email: {
        required: "This field is required.",
        pattern: "Please enter a valid email.",
      },
      aaf_pin: {
        required: "This field is required.",
        pattern: "Please enter a valid pin code.",
      },
    },
    submitHandler: function (form, e) {
      e.preventDefault();
      form.reset();
    },
  });

  $.validator.addMethod(
    "pattern",
    function (value, element, regexp) {
      return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
  );

  function alertNotification(el, msgType, msg) {
    resetNotification(el);

    el.removeClass("hidden").addClass("alert--" + msgType);
    const successIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`;
    const dangerIcon = `<i class="fa-solid fa-circle-exclamation"></i>`;
    el.find(".alert__message").text(msg);

    if (msgType === "success") {
      el.find(".alert__icon").html(successIcon);
    }

    if (msgType === "danger") {
      el.find(".alert__icon").html(dangerIcon);
    }
  }

  $(".alert__btn--close").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      resetNotification($(this).closest(".alert"));
      $(this).closest(".alert").addClass("hidden");
    });
  });

  function resetNotification(el) {
    el.removeClass("alert--success alert--danger");
    el.find(".alert__message").text("");
    el.find(".alert__icon").html("");
  }

  // CHECKOUT PAGE ADD ADDRESS FORM
  $(".checkout-section .checkout-step .address-list .item").each(function () {
    $(this).on("click", function () {
      $(".checkout-section .checkout-step .address-list .item").attr("data-selected", "false");
      $(this).attr("data-selected", "true");
    });
  });

  $(".btn--add-address").each(function () {
    $(this).on("click", function () {
      $(".add-address-form").removeClass("hidden");
    });
  });

  // MENU ITEM ARCHIVE PAGES FILTERS
  // let currentCategoryVal = "";
  $(".filter-dropdown__input").each(function () {
    $(this).on("change", function (e) {
      let getVal = $(this).val();
      // console.log(getVal);
      $(this).closest(".dropdown-menu").prev().addClass("filter-dropdown--input-applied");

      if ($(this).attr("type") === "radio") {
        $(this).closest(".dropdown-menu").prev().find(".filter-dropdown__placeholder").text(getVal);
      }

      if ($(this).attr("type") === "checkbox") {
        var getDefaultCheckbox = $(this).closest(".dropdown-menu").find("li:first-child input");

        let fieldName = $(this).attr("name");
        var checkboxes = $("input[name= " + fieldName + "]");

        var vals = "";
        for (var i = 0, n = checkboxes.length; i < n; i++) {
          if (checkboxes[i].checked) {
            vals += "," + checkboxes[i].value;
          }
        }
        if (vals) vals = vals.substring(1);

        if (vals === "") {
          vals = "all";
          getDefaultCheckbox.checked;
        }
        $(this).closest(".dropdown-menu").prev().find(".filter-dropdown__placeholder").text(vals);
      }
    });
  });

  // ADD TO CART FUNCTION - CART OFFCANVAS OPENING
  const addToCartBtns = $(".menu-item .menu-item__btn--cart");
  addToCartBtns.each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var getID = $(this).closest(".menu-item").attr("data-id");
      console.log(getID);

      // OPENING CART OFFCANVAS
      $("#cartOffcanvas").offcanvas("show");
    });
  });

  $(".account__btn--add-address").click(function () {
    $(".add-address-form").removeClass("hidden");
  });
  $(".account__btn--cancel-add-address").click(function (e) {
    e.preventDefault();
    $(".add-address-form").addClass("hidden");
  });

  // OPENING EDIT ADDRESS FORM FOR EACH ADDRESS ITEM
  $(".address-item__btn--edit").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).closest(".address-item").find(".edit-address-form").removeClass("hidden");
    });
  });

  // HIDING EDIT ADDRSSS FORM ON CLICK OF THE BUTTON CANCEL
  $(".address-item__btn--cancel").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).closest(".form").addClass("hidden");
    });
  });

  // DELETE ADDRESS BUTTON
  $(".address-item__btn--delete").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var getAddressID = $(this).closest(".address-item").attr("data-id");
      // console.log(getAddressID);
      var text = "Do you want to delete this address?";

      if (confirm(text) == true) {
        // PERFORM DELETE ADDRESS OPERATION
        console.log('Deleted this address with ID:' + getAddressID);
      }
    });
  });
});
