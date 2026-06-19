"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, TriangleAlert } from "lucide-react";
import { SITE } from "@/lib/site";

const serviceOptions = [
  "Turnkey Construction",
  "Grey Structure Construction",
  "New Home Construction",
  "Renovation Services",
  "Architectural Design",
  "3D Elevation Design",
  "Interior Finishing",
  "Plumbing Services",
  "Painting Services",
  "Flooring Installation",
  "Woodwork & False Ceiling",
  "Solar Panels Installation",
  "CCTV Installation",
  "Maintenance Work",
] as const;

type FieldName =
  | "fullName"
  | "phone"
  | "email"
  | "projectLocation"
  | "propertyType"
  | "serviceRequired"
  | "message";

type FormErrors = Partial<Record<FieldName, string>>;
type FormStatus = "idle" | "loading" | "success" | "error";

const fieldClassName =
  "mt-2 w-full rounded-button border border-ink-300/30 bg-surface-50 px-4 py-3 font-body text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-100";

export default function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const clearError = (field: FieldName) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries()) as Record<
      FieldName,
      string
    >;

    const nextErrors: FormErrors = {};

    if (!values.fullName?.trim()) nextErrors.fullName = "Enter your full name.";
    if (!values.phone?.trim() || values.phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    if (
      !values.email?.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.projectLocation?.trim()) {
      nextErrors.projectLocation = "Enter the project location.";
    }
    if (!values.propertyType?.trim()) {
      nextErrors.propertyType = "Enter the plot size or property type.";
    }
    if (!values.serviceRequired?.trim()) {
      nextErrors.serviceRequired = "Select the service you need.";
    }
    if (!values.message?.trim()) {
      nextErrors.message = "Tell us briefly about your project.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      const firstInvalidField = form.querySelector<HTMLElement>(
        `[name="${Object.keys(nextErrors)[0]}"]`,
      );
      firstInvalidField?.focus();
      return;
    }

    setErrors({});
    setStatus("loading");

    const subject = `Project Estimate Request — ${values.serviceRequired}`;
    const body = [
      `Full Name: ${values.fullName}`,
      `Phone Number: ${values.phone}`,
      `Email Address: ${values.email}`,
      `Project Location: ${values.projectLocation}`,
      `Plot Size / Property Type: ${values.propertyType}`,
      `Service Required: ${values.serviceRequired}`,
      "",
      "Message / Project Details:",
      values.message,
    ].join("\n");

    try {
      const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      window.setTimeout(() => {
        window.location.href = mailto;
        setStatus("success");
      }, 350);
    } catch {
      setStatus("error");
    }
  };

  const errorFor = (field: FieldName) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 font-body text-xs text-danger-500">
        {errors[field]}
      </p>
    ) : null;

  return (
    <div
      id="estimate-form"
      className="scroll-mt-28 rounded-card border border-ink-300/20 bg-white p-6 shadow-card sm:p-8"
    >
      <div>
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
          Project Inquiry
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
          Request a Project Estimate
        </h2>
        <span className="mt-4 block h-1 w-16 rounded-full bg-accent-500" />
        <p className="mt-5 font-body text-base leading-relaxed text-ink-500">
          Tell us about your construction project, and our team will contact you
          to discuss the scope, cost estimate, and service requirements.
        </p>
      </div>

      <form className="mt-8" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="sr-only">Form Fields</legend>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="font-body text-sm font-semibold text-brand-900"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className={fieldClassName}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                onChange={() => clearError("fullName")}
              />
              {errorFor("fullName")}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="font-body text-sm font-semibold text-brand-900"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+92 300 0000000"
                className={fieldClassName}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                onChange={() => clearError("phone")}
              />
              {errorFor("phone")}
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-body text-sm font-semibold text-brand-900"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClassName}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={() => clearError("email")}
              />
              {errorFor("email")}
            </div>

            <div>
              <label
                htmlFor="projectLocation"
                className="font-body text-sm font-semibold text-brand-900"
              >
                Project Location
              </label>
              <input
                id="projectLocation"
                name="projectLocation"
                type="text"
                autoComplete="address-level2"
                placeholder="City or project area"
                className={fieldClassName}
                aria-invalid={Boolean(errors.projectLocation)}
                aria-describedby={
                  errors.projectLocation ? "projectLocation-error" : undefined
                }
                onChange={() => clearError("projectLocation")}
              />
              {errorFor("projectLocation")}
            </div>

            <div>
              <label
                htmlFor="propertyType"
                className="font-body text-sm font-semibold text-brand-900"
              >
                Plot Size / Property Type
              </label>
              <input
                id="propertyType"
                name="propertyType"
                type="text"
                placeholder="e.g. 10 Marla home"
                className={fieldClassName}
                aria-invalid={Boolean(errors.propertyType)}
                aria-describedby={
                  errors.propertyType ? "propertyType-error" : undefined
                }
                onChange={() => clearError("propertyType")}
              />
              {errorFor("propertyType")}
            </div>

            <div>
              <label
                htmlFor="serviceRequired"
                className="font-body text-sm font-semibold text-brand-900"
              >
                Service Required
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                defaultValue=""
                className={fieldClassName}
                aria-invalid={Boolean(errors.serviceRequired)}
                aria-describedby={
                  errors.serviceRequired ? "serviceRequired-error" : undefined
                }
                onChange={() => clearError("serviceRequired")}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errorFor("serviceRequired")}
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="font-body text-sm font-semibold text-brand-900"
            >
              Message / Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about the project, scope, budget range, or timeline."
              className={`${fieldClassName} resize-y`}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={() => clearError("message")}
            />
            {errorFor("message")}
          </div>
        </fieldset>

        <p className="mt-5 font-body text-xs leading-relaxed text-ink-500">
          Submitting prepares a project request in your default email app. Send
          the prepared email to complete your inquiry.
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-button bg-accent-500 px-7 py-3.5 font-body text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-600 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Preparing Request
            </>
          ) : (
            <>
              Submit Request
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <div className="mt-5 min-h-6" aria-live="polite">
          {status === "success" ? (
            <p className="flex items-start gap-2 font-body text-sm text-success-500">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              Your email app should now contain the prepared request. Send it to
              complete your inquiry.
            </p>
          ) : null}
          {status === "error" && Object.keys(errors).length === 0 ? (
            <p className="flex items-start gap-2 font-body text-sm text-danger-500">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              We could not prepare the request. Please call or email us using
              the contact details on this page.
            </p>
          ) : null}
          {status === "error" && Object.keys(errors).length > 0 ? (
            <p className="flex items-start gap-2 font-body text-sm text-danger-500">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              Please correct the highlighted fields before submitting.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
