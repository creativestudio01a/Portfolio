import type { FormEvent } from "react";
import { Send } from "lucide-react";
import type { ContactFormState } from "./shared";

type FieldProps = {
  error?: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  type?: string;
  value: string;
};

type ContactFormProps = {
  errors: Partial<ContactFormState>;
  form: ContactFormState;
  onChange: (field: keyof ContactFormState, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  sent: boolean;
};

export function ContactForm({ errors, form, onChange, onSubmit, sent }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="form-row">
        <Field error={errors.name} label="Name" name="name" onChange={(value) => onChange("name", value)} value={form.name} />
        <Field
          error={errors.email}
          label="Email"
          name="email"
          onChange={(value) => onChange("email", value)}
          type="email"
          value={form.email}
        />
      </div>
      <Field error={errors.subject} label="Subject" name="subject" onChange={(value) => onChange("subject", value)} value={form.subject} />
      <Field
        error={errors.message}
        label="Message"
        name="message"
        onChange={(value) => onChange("message", value)}
        textarea
        value={form.message}
      />
      <button className="btn-primary" type="submit">
        Send message
        <Send size={18} />
      </button>
      {sent ? <p className="form-note">Your email app is opening with the prepared message.</p> : null}
    </form>
  );
}

export function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="profile-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Field({ error, label, name, onChange, textarea = false, type = "text", value }: FieldProps) {
  const fieldId = `field-${name}`;

  return (
    <label className="field" htmlFor={fieldId}>
      <span>{label}</span>
      {textarea ? (
        <textarea id={fieldId} name={name} onChange={(event) => onChange(event.target.value)} value={value} />
      ) : (
        <input id={fieldId} name={name} onChange={(event) => onChange(event.target.value)} type={type} value={value} />
      )}
      {error ? <small>{error}</small> : null}
    </label>
  );
}
