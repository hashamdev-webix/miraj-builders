"use client";

import {
  Activity,
  AlertTriangle,
  Archive,
  BarChart3,
  Bell,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Database,
  Download,
  Edit3,
  Eye,
  FileBarChart2,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderKanban,
  Gauge,
  HardHat,
  HelpCircle,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  Menu,
  MessageCircle,
  Milestone,
  MoreHorizontal,
  PackageCheck,
  PanelLeftClose,
  Plus,
  RefreshCcw,
  RotateCcw,
  Search,
  Send,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  Upload,
  UserPlus,
  Users,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";

type Field = {
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "datetime-local" | "select" | "textarea" | "file";
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

type ModuleConfig = {
  title: string;
  description: string;
  icon: LucideIcon;
  columns: string[];
  rows: string[][];
  fields: Field[];
  primaryAction?: string;
  rowActions?: string[];
  note?: string;
};

const statusOptions = ["Active", "On Leave", "Inactive"];

const moduleConfigs: Record<string, ModuleConfig> = {
  departments: {
    title: "Departments",
    description: "Manage operational departments, leadership, and live workload.",
    icon: Building2,
    columns: ["Department Name", "Department Head", "Active Workers", "Active Projects", "Status"],
    rows: [
      ["Civil Construction", "Usman Khan", "184", "78", "Active"],
      ["Electrical", "Imran Ali", "92", "46", "Active"],
      ["Plumbing", "Waqas Ahmed", "68", "38", "Active"],
      ["Solar", "Rizwan Ahmed", "54", "32", "Active"],
      ["Interior", "Sana Farooq", "76", "29", "Active"],
      ["Carpentry", "Naveed Akram", "43", "18", "Active"],
      ["Paint & Finishing", "Hamza Rauf", "59", "21", "Inactive"],
    ],
    fields: [
      { label: "Department Name", required: true },
      { label: "Department Head", type: "select", options: ["Usman Khan", "Imran Ali", "Waqas Ahmed", "Rizwan Ahmed", "Sana Farooq"] },
      { label: "Manager Permission Flags", type: "textarea", placeholder: "Approvals, payments, projects..." },
      { label: "Status", type: "select", options: ["Active", "Inactive"] },
    ],
    rowActions: ["Edit", "Change head", "Permissions", "Archive"],
  },
  services: {
    title: "Services & Sub-Services",
    description: "Controls the service catalog and booking wizard Steps 1 and 2.",
    icon: PackageCheck,
    columns: ["Service Name", "Sub-Services", "Linked Department", "Milestone Template", "Status"],
    rows: [
      ["Turnkey Construction", "New Home, 3D Design, Interior Finishing", "Civil Construction", "Turnkey 12-Phase", "Active"],
      ["Grey Structure", "Foundation, Structure, Roofing", "Civil Construction", "Grey Structure 8-Phase", "Active"],
      ["Renovation", "Kitchen, Bathroom, Full Home", "Civil Construction", "Renovation 6-Phase", "Active"],
      ["Solar Energy", "5KW, 10KW, Battery Backup", "Solar", "Solar Install 5-Phase", "Active"],
    ],
    fields: [
      { label: "Service Name", required: true },
      { label: "Sub-Services", type: "textarea", required: true, placeholder: "One per line" },
      { label: "Linked Department", type: "select", options: ["Civil Construction", "Electrical", "Plumbing", "Solar", "Interior", "Carpentry"] },
      { label: "Milestone Template", type: "select", options: ["Turnkey 12-Phase", "Grey Structure 8-Phase", "Renovation 6-Phase", "Solar Install 5-Phase"] },
      { label: "Display Order", type: "number" },
      { label: "Status", type: "select", options: ["Active", "Inactive"] },
    ],
    rowActions: ["Edit", "Reorder", "Change template", "Deactivate"],
  },
  managers: {
    title: "Managers",
    description: "Admin-created manager accounts and operating scope.",
    icon: Users,
    columns: ["Full Name", "Role Type", "Department(s) / City(ies)", "Phone & Email", "Active Projects", "Status", "Access Level"],
    rows: [
      ["Usman Khan", "Department Manager", "Civil / Lahore", "+92 300 1112233 · usman@miraj.pk", "78", "Active", "Manager"],
      ["Sana Farooq", "Account & Content Manager", "Lahore / Islamabad", "+92 301 4455667 · sana@miraj.pk", "32", "Active", "Account Manager"],
      ["Rizwan Ahmed", "Department Manager", "Solar / Lahore", "+92 302 7788990 · rizwan@miraj.pk", "54", "Active", "Manager"],
    ],
    fields: [
      { label: "Full Name", required: true },
      { label: "Role Type", type: "select", options: ["Department Manager", "Account & Content Manager"] },
      { label: "Departments / Cities", type: "textarea", required: true },
      { label: "Phone", type: "tel", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Initial Password", required: true },
      { label: "Status", type: "select", options: statusOptions },
      { label: "Login Access Level", type: "select", options: ["Department Manager", "Account & Content Manager", "Custom"] },
    ],
    rowActions: ["Edit", "Assign scope", "Reset password", "Deactivate"],
  },
  workers: {
    title: "Workers",
    description: "Worker accounts are created by Admin only; self-registration is disabled.",
    icon: HardHat,
    columns: ["Full Name", "Phone", "Address / City", "Skill / Role", "Employment Type", "CNIC", "Status", "Active Projects"],
    rows: [
      ["Ahmed Raza", "+92 321 1234567", "Johar Town, Lahore", "Site Supervisor", "Full-time salaried", "35202-•••••••-1", "Active", "MB-1042, MB-1088"],
      ["Bilal Hussain", "+92 322 7654321", "DHA, Lahore", "Electrician", "Project-based contract", "35202-•••••••-3", "Active", "MB-1102"],
      ["Sajid Mehmood", "+92 333 2468101", "Bahria Town, Lahore", "Plumber", "Full-time salaried", "35202-•••••••-5", "On Leave", "—"],
    ],
    fields: [
      { label: "Full Name", required: true },
      { label: "Phone Number", type: "tel", required: true },
      { label: "Profile Photo", type: "file" },
      { label: "Address / City", required: true },
      { label: "Skill / Role", required: true },
      { label: "Employment Type", type: "select", options: ["Full-time salaried", "Project-based contract"] },
      { label: "CNIC", required: true },
      { label: "Assign Project", type: "select", options: ["None", "MB-1042", "MB-1088", "MB-1102"] },
      { label: "Initial Password", required: true },
      { label: "Status", type: "select", options: statusOptions },
    ],
    rowActions: ["Edit", "Assign project", "View update history", "Deactivate"],
    note: "Client contact details and all project financial data remain hidden from worker accounts.",
  },
  clients: {
    title: "Clients",
    description: "Client profiles, project/payment history, and manually added leads.",
    icon: Users,
    columns: ["Full Name", "Phone & Email", "Address / City", "Source", "Active Project(s)", "Total Spent", "Status"],
    rows: [
      ["Ali Hassan", "+92 300 5544332 · ali@email.com", "DHA, Lahore", "Website Booking", "MB-1042", "PKR 8,450,000", "Active"],
      ["Maryam Saleem", "+92 301 6677881 · maryam@email.com", "Bahria Town, Lahore", "Referral", "MB-1088", "PKR 5,200,000", "Active"],
      ["Fahad Iqbal", "+92 302 8899001 · fahad@email.com", "Gulberg, Lahore", "Manually Added", "—", "PKR 0", "Lead"],
    ],
    fields: [
      { label: "Full Name", required: true },
      { label: "Phone", type: "tel", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Address / City", required: true },
      { label: "Service Interested In", type: "select", options: ["Turnkey Construction", "Grey Structure", "Renovation", "Solar Energy", "Interior Design"] },
      { label: "Lead Source", type: "select", options: ["Phone Call", "Referral", "Walk-in", "Other"] },
      { label: "Notes", type: "textarea", placeholder: "Optional client notes" },
    ],
    primaryAction: "Add Client Manually",
    rowActions: ["View profile", "Edit", "View projects", "Deactivate"],
    note: "Submitting this form creates the client account, generates a temporary password, and sends credentials by email and WhatsApp.",
  },
  roles: {
    title: "Roles & Permissions",
    description: "Per-module access and action rights for every platform role.",
    icon: LockKeyhole,
    columns: ["Role Name", "Module Access", "Action Rights"],
    rows: [
      ["Founder", "All modules including Accountant", "View · Edit · Approve · Delete"],
      ["Co-Founder", "All modules including Accountant", "View · Edit · Approve · Delete"],
      ["Account & Content Manager", "Dashboard, Bookings, Clients, Reports", "View · Edit · Approve bookings"],
      ["Department Manager", "Own dashboard, Bookings, Projects, Payments", "View · Edit · Approve · Mark Paid"],
      ["Worker", "Own projects only", "Updates · Photos · Complete milestone"],
      ["Client", "Own project, payments, documents, design", "Upload proof · Approve design"],
    ],
    fields: [
      { label: "Role Name", required: true },
      { label: "Module Access", type: "textarea", required: true },
      { label: "Action Rights", type: "textarea", required: true },
      { label: "Assign Staff Account", type: "select", options: ["None", "Usman Khan", "Sana Farooq", "Rizwan Ahmed"] },
    ],
    rowActions: ["Edit role", "Assign staff", "Review permissions"],
    note: "Accountant access is permanently limited to Founder and Co-Founder accounts at the permissions layer.",
  },
  bookings: {
    title: "Bookings",
    description: "Review complete booking-wizard submissions and confirm the project workflow.",
    icon: CalendarDays,
    columns: ["Booking ID", "Client Name", "Service & Sub-Service", "City / Area", "Preferred Date", "Submitted Via", "Status", "Assigned Manager"],
    rows: [
      ["BK-2489", "Ali Hassan", "Solar · 10KW System", "DHA, Lahore", "28 Jun 2026", "Website", "New", "Unassigned"],
      ["BK-2488", "Maryam Saleem", "Turnkey · New Home", "Bahria Town, Lahore", "01 Jul 2026", "Website", "Confirmed", "Usman Khan"],
      ["BK-2487", "Fahad Iqbal", "Interior · First Floor", "Gulberg, Lahore", "03 Jul 2026", "Manually Added by Sana", "Rescheduled", "Sana Farooq"],
      ["BK-2486", "Hina Aslam", "Renovation · Kitchen", "Model Town, Lahore", "05 Jul 2026", "Website", "Rejected", "Waqas Ahmed"],
    ],
    fields: [
      { label: "Client", type: "select", options: ["Ali Hassan", "Maryam Saleem", "Fahad Iqbal", "Hina Aslam"] },
      { label: "Service", type: "select", options: ["Turnkey Construction", "Grey Structure", "Renovation", "Solar Energy", "Interior Design"] },
      { label: "Sub-Service", required: true },
      { label: "City / Area", required: true },
      { label: "Preferred Date", type: "date", required: true },
      { label: "Site / Contact Notes", type: "textarea" },
      { label: "Assigned Manager", type: "select", options: ["Unassigned", "Usman Khan", "Sana Farooq", "Rizwan Ahmed"] },
    ],
    rowActions: ["Open detail", "Approve & Confirm", "Reschedule", "Reject"],
  },
  projects: {
    title: "Projects",
    description: "Live project delivery, assignments, milestones, and financial position.",
    icon: FolderKanban,
    columns: ["Project ID", "Client", "Service", "Department / Manager", "Assigned Workers", "City", "Start Date", "Current Milestone", "% Complete", "Status", "Contract / Paid / Pending"],
    rows: [
      ["MB-1042", "Ali Hassan", "Turnkey Construction", "Civil / Usman Khan", "Ahmed Raza + 8", "Lahore", "12 Jan 2026", "Roof Slab", "62%", "Active", "12.5M / 8.4M / 4.1M"],
      ["MB-1088", "Maryam Saleem", "Renovation", "Interior / Sana Farooq", "Ahmed Raza + 4", "Lahore", "02 Mar 2026", "Finishing", "84%", "Active", "6.2M / 5.2M / 1.0M"],
      ["MB-1102", "Saad Qureshi", "Solar Energy", "Solar / Rizwan Ahmed", "Bilal Hussain + 2", "Lahore", "19 Jun 2026", "Panel Install", "35%", "On Hold", "2.8M / 1.1M / 1.7M"],
    ],
    fields: [
      { label: "Client", type: "select", options: ["Ali Hassan", "Maryam Saleem", "Saad Qureshi"] },
      { label: "Service", type: "select", options: ["Turnkey Construction", "Renovation", "Solar Energy"] },
      { label: "Department / Manager", required: true },
      { label: "Assigned Worker(s)", type: "textarea" },
      { label: "City", required: true },
      { label: "Start Date", type: "date" },
      { label: "Contract Value", type: "number" },
      { label: "Status", type: "select", options: ["Active", "On Hold", "Completed", "Cancelled"] },
    ],
    rowActions: ["View timeline", "Reassign", "Generate report", "Archive"],
  },
  milestones: {
    title: "Milestones",
    description: "Reusable service templates and project-specific milestone sequencing.",
    icon: Milestone,
    columns: ["Milestone Name", "Linked Service", "Sequence Order", "Weight", "Minimum Photos", "Auto-Unlock Condition"],
    rows: [
      ["Site Mobilization", "Turnkey Construction", "1", "5%", "2", "Initial payment verified"],
      ["Foundation Complete", "Turnkey Construction", "2", "15%", "4", "Foundation payment marked Paid"],
      ["Grey Structure", "Turnkey Construction", "3", "30%", "6", "Structure payment marked Paid"],
      ["Panel Installation", "Solar Energy", "3", "35%", "3", "Equipment payment marked Paid"],
    ],
    fields: [
      { label: "Milestone Name", required: true },
      { label: "Linked Service", type: "select", options: ["Turnkey Construction", "Grey Structure", "Renovation", "Solar Energy"] },
      { label: "Sequence Order", type: "number", required: true },
      { label: "Weight (% of project)", type: "number", required: true },
      { label: "Minimum Photos Required", type: "number", required: true },
      { label: "Auto-Unlock Condition", type: "textarea", required: true },
    ],
    rowActions: ["Edit", "Reorder", "Override complete"],
    note: "Override completion is Admin-only, requires a reason, and is written to Activity Logs.",
  },
  payments: {
    title: "Payments & Finance",
    description: "Project-level milestone payments and uploaded proof verification.",
    icon: WalletCards,
    columns: ["Payment ID", "Project / Client", "Linked Milestone", "Amount Due / Paid", "Proof Screenshot", "Status", "Verified By", "Date"],
    rows: [
      ["PAY-9012", "MB-1042 · Ali Hassan", "Roof Slab", "2,500,000 / 2,500,000", "payment-9012.jpg", "Pending Review", "—", "25 Jun 2026"],
      ["PAY-9011", "MB-1088 · Maryam Saleem", "Finishing", "1,000,000 / 1,000,000", "payment-9011.jpg", "Verified-Paid", "Usman Khan", "24 Jun 2026"],
      ["PAY-9009", "MB-1102 · Saad Qureshi", "Equipment", "1,700,000 / 1,500,000", "payment-9009.jpg", "Rejected", "Rizwan Ahmed", "22 Jun 2026"],
    ],
    fields: [
      { label: "Project / Client", type: "select", options: ["MB-1042 · Ali Hassan", "MB-1088 · Maryam Saleem", "MB-1102 · Saad Qureshi"] },
      { label: "Linked Milestone", required: true },
      { label: "Amount Due", type: "number", required: true },
      { label: "Amount Paid", type: "number", required: true },
      { label: "Proof Screenshot", type: "file" },
      { label: "Status", type: "select", options: ["Pending Review", "Verified-Paid", "Rejected"] },
      { label: "Rejection / Verification Notes", type: "textarea" },
    ],
    rowActions: ["Review proof", "Mark Paid", "Reject"],
    note: "Marking Paid unlocks the next milestone, updates progress, and notifies the client and assigned workers.",
  },
  disputes: {
    title: "Disputes / Issues",
    description: "Client and worker issues, ownership, escalation, and resolution.",
    icon: HelpCircle,
    columns: ["Ticket ID", "Raised By", "Linked Project", "Category", "Description", "Status", "Assigned To", "Resolution Notes"],
    rows: [
      ["ISS-144", "Ali Hassan · Client", "MB-1042", "Delay", "Roof slab work delayed by weather.", "In Review", "Usman Khan", "Revised schedule shared"],
      ["ISS-143", "Ahmed Raza · Worker", "MB-1088", "Quality issue", "Replacement tiles required.", "Open", "Sana Farooq", "—"],
      ["ISS-139", "Maryam Saleem · Client", "MB-1088", "Payment dispute", "Installment amount clarification.", "Escalated", "Founder", "Under financial review"],
    ],
    fields: [
      { label: "Raised By", required: true },
      { label: "Linked Project", required: true },
      { label: "Category", type: "select", options: ["Quality issue", "Delay", "Payment dispute", "Behavior complaint", "Other"] },
      { label: "Description", type: "textarea", required: true },
      { label: "Status", type: "select", options: ["Open", "In Review", "Resolved", "Escalated"] },
      { label: "Assigned To", type: "select", options: ["Usman Khan", "Sana Farooq", "Rizwan Ahmed", "Founder"] },
      { label: "Resolution Notes", type: "textarea" },
    ],
    rowActions: ["Assign", "Update status", "Add resolution", "Escalate"],
  },
  meetings: {
    title: "Meetings",
    description: "Site visits, consultations, internal reviews, and reminders.",
    icon: CalendarDays,
    columns: ["Meeting Type", "Linked Client / Project", "Date & Time", "Attendees", "Location / Link", "Status", "Outcome Notes"],
    rows: [
      ["Site Visit", "Ali Hassan / MB-1042", "25 Jun 2026 · 3:00 PM", "Usman, Ahmed, Ali", "DHA Phase 6", "Scheduled", "—"],
      ["Client Consultation", "Fahad Iqbal", "26 Jun 2026 · 11:00 AM", "Sana, Fahad", "Miraj Office", "Scheduled", "—"],
      ["Internal Review", "MB-1088", "24 Jun 2026 · 4:30 PM", "Sana, Design Team", "Meeting Room 2", "Completed", "Design approved"],
    ],
    fields: [
      { label: "Meeting Type", type: "select", options: ["Site Visit", "Client Consultation", "Internal Review"] },
      { label: "Linked Client / Project" },
      { label: "Date & Time", type: "datetime-local", required: true },
      { label: "Attendees", type: "textarea", required: true },
      { label: "Location / Link", required: true },
      { label: "Status", type: "select", options: ["Scheduled", "Completed", "Cancelled", "No-show"] },
      { label: "Outcome Notes", type: "textarea" },
    ],
    rowActions: ["Complete", "Reschedule", "WhatsApp reminder"],
  },
  activity: {
    title: "Activity Logs",
    description: "Immutable audit history across all business modules.",
    icon: Activity,
    columns: ["Timestamp", "User", "Action Taken", "Module Affected"],
    rows: [
      ["25 Jun 2026 · 10:42 AM", "Usman Khan", "Marked Payment PAY-9011 as Paid", "Payments"],
      ["25 Jun 2026 · 10:18 AM", "Sana Farooq", "Approved Booking BK-2488", "Bookings"],
      ["25 Jun 2026 · 09:56 AM", "Founder", "Edited Accountant Entry ACC-309", "Accountant"],
      ["25 Jun 2026 · 09:12 AM", "System", "Daily database backup completed", "Backup"],
    ],
    fields: [],
    primaryAction: "",
    rowActions: ["View detail"],
    note: "Read-only. Logs cannot be edited or deleted by any role, including Founder.",
  },
  whatsapp: {
    title: "WhatsApp Logs",
    description: "WhatsApp-first notification delivery and failure recovery.",
    icon: MessageCircle,
    columns: ["Date / Time", "Recipient", "Trigger Event", "Message Preview", "Delivery Status"],
    rows: [
      ["25 Jun · 10:42 AM", "Ali Hassan", "Payment marked Paid", "Your payment for Roof Slab has been verified...", "Delivered"],
      ["25 Jun · 10:18 AM", "Maryam Saleem", "Booking confirmed", "Your Miraj Builders booking is confirmed...", "Sent"],
      ["25 Jun · 09:44 AM", "Rizwan Ahmed", "New booking submitted", "A new Solar booking needs review...", "Failed"],
    ],
    fields: [],
    primaryAction: "",
    rowActions: ["Preview", "Resend failed"],
  },
  templates: {
    title: "Templates",
    description: "Notification wording, channels, placeholders, and activation.",
    icon: FileText,
    columns: ["Template Name", "Channel", "Placeholders", "Status"],
    rows: [
      ["Booking Confirmed", "WhatsApp + Email", "{client_name}, {project_id}, {date}", "Active"],
      ["Payment Reminder", "WhatsApp", "{client_name}, {amount}, {due_date}", "Active"],
      ["Milestone Complete", "WhatsApp + In-app", "{project_id}, {milestone_name}", "Active"],
      ["Login Credentials", "Email + WhatsApp", "{email}, {temporary_password}, {app_link}", "Active"],
      ["Dispute Acknowledgment", "WhatsApp + Email", "{ticket_id}, {project_id}", "Inactive"],
    ],
    fields: [
      { label: "Template Name", required: true },
      { label: "Channel", type: "select", options: ["WhatsApp", "Email", "SMS", "WhatsApp + Email", "WhatsApp + In-app"] },
      { label: "Placeholders", type: "textarea", required: true },
      { label: "Message Wording", type: "textarea", required: true },
      { label: "Status", type: "select", options: ["Active", "Inactive"] },
    ],
    rowActions: ["Edit wording", "Preview sample", "Activate / Deactivate"],
  },
  integrations: {
    title: "Integrations",
    description: "External communication, mapping, and payment service connections.",
    icon: Wrench,
    columns: ["Integration", "Purpose", "Connection", "Last Sync"],
    rows: [
      ["WhatsApp Business API", "Client and worker notifications", "Connected", "25 Jun · 10:42 AM"],
      ["Email / SMTP Provider", "Transactional email", "Connected", "25 Jun · 10:18 AM"],
      ["Google Maps API", "City and area matching", "Connected", "25 Jun · 09:54 AM"],
      ["SMS Gateway", "Fallback notifications", "Disconnected", "Never"],
      ["Payment Gateway", "Future phase", "Not configured", "—"],
    ],
    fields: [
      { label: "Integration", type: "select", options: ["WhatsApp Business API", "Email / SMTP Provider", "Google Maps API", "SMS Gateway", "Payment Gateway"] },
      { label: "API Key / Credentials", required: true },
      { label: "Webhook / Endpoint" },
      { label: "Status", type: "select", options: ["Connected", "Disconnected"] },
    ],
    rowActions: ["Connect / Disconnect", "Test connection", "View sync"],
  },
  systemLogs: {
    title: "System Logs",
    description: "Technical events for developers and technical administrators.",
    icon: Database,
    columns: ["Timestamp", "Error / Event Type", "Affected Service", "Severity"],
    rows: [
      ["25 Jun · 10:40 AM", "Webhook delivered", "WhatsApp API", "Info"],
      ["25 Jun · 09:52 AM", "Slow database query", "Projects", "Warning"],
      ["24 Jun · 11:13 PM", "SMTP authentication retry", "Email", "Error"],
    ],
    fields: [],
    primaryAction: "",
    rowActions: ["Inspect event"],
  },
  backup: {
    title: "Backup & Restore",
    description: "Database protection, restore points, and full exports.",
    icon: Database,
    columns: ["Last Backup Date", "Backup Frequency", "Backup Size", "Status"],
    rows: [
      ["25 Jun 2026 · 02:00 AM", "Daily", "4.8 GB", "Successful"],
      ["24 Jun 2026 · 02:00 AM", "Daily", "4.7 GB", "Successful"],
      ["23 Jun 2026 · 02:00 AM", "Daily", "4.7 GB", "Successful"],
    ],
    fields: [
      { label: "Backup Frequency", type: "select", options: ["Daily", "Weekly"] },
      { label: "Retention Period (days)", type: "number" },
    ],
    primaryAction: "Trigger Manual Backup",
    rowActions: ["Restore", "Download"],
    note: "Restore is Founder/Co-Founder only and always requires explicit confirmation.",
  },
};

const navGroups = [
  {
    label: "Management",
    items: [
      ["departments", "Departments", Building2],
      ["services", "Services & Sub-Services", PackageCheck],
      ["managers", "Managers", Users],
      ["workers", "Workers", HardHat],
      ["clients", "Clients", Users],
      ["roles", "Roles & Permissions", LockKeyhole],
    ],
  },
  {
    label: "Operations",
    items: [
      ["bookings", "Bookings", CalendarDays],
      ["projects", "Projects", FolderKanban],
      ["milestones", "Milestones", Milestone],
      ["payments", "Payments & Finance", WalletCards],
      ["disputes", "Disputes / Issues", HelpCircle],
      ["meetings", "Meetings", CalendarDays],
    ],
  },
  {
    label: "Reports & Analytics",
    items: [
      ["analytics", "Analytics", BarChart3],
      ["reports", "Reports", FileBarChart2],
      ["activity", "Activity Logs", Activity],
      ["whatsapp", "WhatsApp Logs", MessageCircle],
    ],
  },
  {
    label: "System",
    items: [
      ["settings", "Settings", Settings],
      ["templates", "Templates", FileText],
      ["integrations", "Integrations", Wrench],
      ["systemLogs", "System Logs", Database],
      ["backup", "Backup & Restore", BriefcaseBusiness],
    ],
  },
] satisfies { label: string; items: [string, string, LucideIcon][] }[];

const attentionCards = [
  ["Pending Booking Approvals", "48", "Review new requests", CalendarDays, "bookings", "bg-blue-50 text-blue-700"],
  ["Pending Payment Verifications", "32", "Proof screenshots waiting", WalletCards, "payments", "bg-amber-50 text-amber-700"],
  ["Open Disputes / Issues", "9", "3 escalated", AlertTriangle, "disputes", "bg-red-50 text-red-700"],
  ["Today's Meetings / Visits", "6", "Next at 11:00 AM", CalendarDays, "meetings", "bg-emerald-50 text-emerald-700"],
] satisfies [string, string, string, LucideIcon, string, string][];

const recentActivity = [
  ["Payment PAY-9011 verified", "Usman Khan marked PKR 1,000,000 as paid", "8 min ago", WalletCards, "bg-emerald-50 text-emerald-700"],
  ["Booking BK-2488 confirmed", "Project MB-1110 and milestone timeline created", "24 min ago", CheckCircle2, "bg-blue-50 text-blue-700"],
  ["Milestone completed", "Foundation Complete · Project MB-1042", "47 min ago", Milestone, "bg-violet-50 text-violet-700"],
  ["New dispute ISS-144", "Client reported a project delay", "1 hr ago", AlertTriangle, "bg-red-50 text-red-700"],
  ["New booking BK-2489", "Solar 10KW · DHA Lahore", "2 hrs ago", CalendarDays, "bg-amber-50 text-amber-700"],
] satisfies [string, string, string, LucideIcon, string][];

function badgeStyle(value: string) {
  if (/active|confirmed|verified|paid|successful|connected|delivered|completed|resolved/i.test(value)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (/new|scheduled|sent|info|lead/i.test(value)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (/pending|review|warning|rescheduled|on hold|on leave/i.test(value)) return "bg-amber-50 text-amber-700 ring-amber-100";
  if (/rejected|failed|error|inactive|cancelled|escalated|disconnected/i.test(value)) return "bg-red-50 text-red-700 ring-red-100";
  return "bg-slate-50 text-slate-600 ring-slate-200";
}

function StatusBadge({ value }: { value: string }) {
  return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-extrabold ring-1 ${badgeStyle(value)}`}>{value}</span>;
}

function Modal({
  title,
  subtitle,
  children,
  onClose,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#021f4f]/55 p-3 backdrop-blur-sm sm:p-6" onMouseDown={onClose}>
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-7">
          <div>
            <h2 className="font-heading text-xl font-black text-[#071b4d]">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
          </div>
          <button onClick={onClose} className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-slate-500 hover:bg-slate-100" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ModuleForm({ config, onClose }: { config: ModuleConfig; onClose: () => void }) {
  return (
    <form
      className="p-5 sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((field) => (
          <label key={field.label} className={field.type === "textarea" ? "sm:col-span-2" : ""}>
            <span className="mb-2 block text-sm font-extrabold text-[#071b4d]">
              {field.label}{field.required ? <span className="text-red-500"> *</span> : null}
            </span>
            {field.type === "textarea" ? (
              <textarea required={field.required} placeholder={field.placeholder} className="min-h-28 w-full rounded-md border border-slate-200 px-3.5 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
            ) : field.type === "select" ? (
              <select required={field.required} className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                {field.options?.map((option) => <option key={option}>{option}</option>)}
              </select>
            ) : (
              <input type={field.type || "text"} required={field.required} placeholder={field.placeholder} className="h-11 w-full rounded-md border border-slate-200 px-3.5 text-sm outline-none file:mr-3 file:rounded file:border-0 file:bg-blue-50 file:px-3 file:py-1.5 file:font-bold file:text-blue-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
            )}
          </label>
        ))}
      </div>
      {config.note ? <div className="mt-5 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900">{config.note}</div> : null}
      <div className="mt-7 flex justify-end gap-3 border-t border-slate-200 pt-5">
        <button type="button" onClick={onClose} className="h-11 rounded-md border border-slate-200 px-5 text-sm font-extrabold">Cancel</button>
        <button type="submit" className="flex h-11 items-center gap-2 rounded-md bg-blue-700 px-5 text-sm font-extrabold text-white">
          <Check className="h-4 w-4" /> Save
        </button>
      </div>
    </form>
  );
}

function BookingReview({ onClose }: { onClose: () => void }) {
  const wizard = [
    ["1. Service", "Solar Energy"],
    ["2. Sub-Service", "10KW On-Grid System"],
    ["3. Property", "Residential · 1 Kanal"],
    ["4. Site", "DHA Phase 6, Lahore"],
    ["5. Schedule", "28 June 2026 · Morning"],
    ["6. Contact", "Ali Hassan · +92 300 5544332"],
  ];
  return (
    <div className="p-5 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-2">
        {wizard.map(([label, value]) => (
          <div key={label} className="rounded-md border border-slate-200 p-4">
            <div className="text-xs font-black uppercase text-slate-400">{label}</div>
            <div className="mt-2 text-sm font-extrabold text-[#071b4d]">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-md bg-slate-50 p-4 text-sm">
        <b>On approval:</b> status becomes Confirmed, a Project is created, milestones generate from the linked service template, the manager is assigned, and confirmation is sent by WhatsApp and email.
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <button onClick={onClose} className="flex h-11 items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-extrabold text-white"><CheckCircle2 className="h-4 w-4" />Approve & Confirm</button>
        <button onClick={onClose} className="flex h-11 items-center justify-center gap-2 rounded-md bg-amber-500 px-4 text-sm font-extrabold text-white"><CalendarDays className="h-4 w-4" />Reschedule</button>
        <button onClick={onClose} className="flex h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-4 text-sm font-extrabold text-white"><X className="h-4 w-4" />Reject with Reason</button>
      </div>
    </div>
  );
}

function DataTable({ config, onAction }: { config: ModuleConfig; onAction: (action: string) => void }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_6px_22px_rgba(2,31,79,0.05)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {config.columns.map((column) => <th key={column} className="whitespace-nowrap px-4 py-3.5 text-xs font-black uppercase text-slate-500">{column}</th>)}
              <th className="w-16 px-4 py-3.5 text-right text-xs font-black uppercase text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {config.rows.map((row, index) => (
              <tr key={`${row[0]}-${index}`} className="border-b border-slate-100 last:border-0 hover:bg-blue-50/40">
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className={`max-w-[280px] px-4 py-4 text-sm ${cellIndex === 0 ? "font-extrabold text-[#071b4d]" : "font-medium text-slate-600"}`}>
                    {/(active|inactive|pending|confirmed|rejected|rescheduled|cancelled|completed|failed|connected|delivered|sent|warning|error|review|resolved|escalated|on leave|on hold|lead|successful)$/i.test(cell)
                      ? <StatusBadge value={cell} />
                      : <span className="block truncate" title={cell}>{cell}</span>}
                  </td>
                ))}
                <td className="px-4 py-4 text-right">
                  <button onClick={() => onAction(config.rowActions?.[0] || "View")} className="grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100" aria-label="Row actions">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-3 text-xs font-bold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Showing {config.rows.length} records</span>
        <div className="flex gap-2">
          <button className="rounded border border-slate-200 px-3 py-1.5">Previous</button>
          <button className="rounded bg-blue-700 px-3 py-1.5 text-white">1</button>
          <button className="rounded border border-slate-200 px-3 py-1.5">Next</button>
        </div>
      </div>
    </div>
  );
}

const permissionMatrix = [
  ["Dashboard (own scope)", "✓", "✓", "✓", "✓", "✓", "✓"],
  ["Accountant", "✓", "✓", "✗", "✗", "✗", "✗"],
  ["Bookings — Approve/Reject", "✓", "✓", "✓", "✓", "✗", "✗"],
  ["Projects — full edit", "✓", "✓", "View only", "✓", "✗", "✗"],
  ["Payments — Mark Paid", "✓", "✓", "✗", "✓", "✗", "✗"],
  ["Clients — Add Manually", "✓", "✓", "✓", "✗", "✗", "✗"],
  ["Workers — manage accounts", "✓", "✓", "✗", "View only", "✗", "✗"],
  ["Disputes — resolve", "✓", "✓", "View only", "✓", "✗", "✗"],
  ["Roles & Permissions", "✓", "✓", "✗", "✗", "✗", "✗"],
  ["Settings / Integrations / Backup", "✓", "✓", "✗", "✗", "✗", "✗"],
  ["Reports & Analytics", "✓", "✓", "✓", "View only", "✗", "✗"],
  ["Activity Logs", "✓", "✓", "✗", "✗", "✗", "✗"],
];

const notificationTriggers = [
  ["New booking submitted", "Assigned Manager + Admin", "In-app + WhatsApp"],
  ["Booking confirmed", "Client", "WhatsApp + Email"],
  ["Booking rescheduled / rejected", "Client", "WhatsApp + Email"],
  ["Payment screenshot uploaded", "Manager + Admin", "In-app + WhatsApp"],
  ["Payment marked Paid", "Client + assigned Worker(s)", "WhatsApp + In-app"],
  ["Milestone marked complete", "Client + Admin", "WhatsApp + In-app"],
  ["New client manually added", "Client", "Email + WhatsApp"],
  ["Dispute raised", "Assigned Manager (+ Founder if escalated)", "In-app + WhatsApp"],
  ["New worker/manager account created", "New user", "Email / SMS"],
];

function ReferenceTable({ title, columns, rows }: { title: string; columns: string[]; rows: string[][] }) {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4"><h2 className="font-heading font-black text-[#071b4d]">{title}</h2></div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead><tr className="bg-slate-50">{columns.map((column) => <th key={column} className="whitespace-nowrap px-4 py-3 text-xs font-black uppercase text-slate-500">{column}</th>)}</tr></thead>
          <tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-slate-100">{row.map((cell, index) => <td key={`${row[0]}-${index}`} className={`px-4 py-3 ${index === 0 ? "font-extrabold text-[#071b4d]" : `font-bold ${cell === "✓" ? "text-emerald-600" : cell === "✗" ? "text-red-500" : "text-slate-500"}`}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}

function ModulePage({ moduleKey, onOpenForm, onOpenReview }: { moduleKey: string; onOpenForm: () => void; onOpenReview: () => void }) {
  const config = moduleConfigs[moduleKey];
  const [query, setQuery] = useState("");
  if (!config) return null;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-blue-700"><config.icon className="h-4 w-4" /> Admin Module</div>
          <h1 className="font-heading text-2xl font-black text-[#071b4d] sm:text-3xl">{config.title}</h1>
          <p className="mt-1 max-w-3xl text-sm font-medium text-slate-500">{config.description}</p>
        </div>
        {config.fields.length && config.primaryAction !== "" ? (
          <button onClick={onOpenForm} className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-blue-700 px-4 text-sm font-extrabold text-white shadow-sm">
            <Plus className="h-4 w-4" /> {config.primaryAction || `Add ${config.title.replace(/s$/, "")}`}
          </button>
        ) : null}
      </div>

      {config.note ? <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900"><ShieldCheck className="h-5 w-5 shrink-0" />{config.note}</div> : null}

      <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center">
        <label className="relative min-w-0 flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${config.title.toLowerCase()}...`} className="h-10 w-full rounded-md border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-blue-500" />
        </label>
        <button className="flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-extrabold"><Filter className="h-4 w-4" />Filters</button>
        <button className="flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-extrabold"><Download className="h-4 w-4" />Export</button>
      </div>

      <DataTable config={config} onAction={(action) => moduleKey === "bookings" || /review/i.test(action) ? onOpenReview() : onOpenForm()} />
      {moduleKey === "roles" ? (
        <ReferenceTable
          title="Default Roles & Permissions Matrix"
          columns={["Module", "Founder", "Co-Founder", "Acct/Content Mgr", "Dept Manager", "Worker", "Client"]}
          rows={permissionMatrix}
        />
      ) : null}
      {moduleKey === "templates" ? (
        <ReferenceTable
          title="Notification Triggers — Quick Reference"
          columns={["Event", "Recipient", "Channel"]}
          rows={notificationTriggers}
        />
      ) : null}
    </div>
  );
}

function Donut() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[210px]">
      <div className="h-full w-full rounded-full" style={{ background: "conic-gradient(#1267de 0 32.6%, #22a95a 32.6% 58%, #f59e0b 58% 70%, #ef4444 70% 77.9%, #dbe1ea 77.9% 100%)" }} />
      <div className="absolute inset-[24%] grid place-items-center rounded-full bg-white text-center">
        <div><div className="text-2xl font-black text-[#071b4d]">2,489</div><div className="text-xs font-bold text-slate-500">Bookings</div></div>
      </div>
    </div>
  );
}

function Dashboard({ navigate }: { navigate: (key: string) => void }) {
  const bars = [31, 38, 43, 58, 78, 66, 74, 69, 61, 56, 49, 45];
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-bold text-blue-700">Thursday, 25 June 2026</p>
        <h1 className="mt-1 font-heading text-2xl font-black text-[#071b4d] sm:text-3xl">Good morning, Usman</h1>
        <p className="mt-1 text-sm font-medium text-slate-500">Here is what needs your attention across Miraj Builders today.</p>
      </div>

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="font-heading text-lg font-black text-[#071b4d]">Needs Action Today</h2><span className="text-xs font-extrabold text-red-600">95 total items</span></div>
        <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          {attentionCards.map(([title, count, note, Icon, target, color]) => (
            <button key={title} onClick={() => navigate(target)} className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 text-left shadow-[0_6px_20px_rgba(2,31,79,0.06)] transition hover:-translate-y-0.5 hover:border-blue-200">
              <div className="flex items-start justify-between gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-md ${color}`}><Icon className="h-5 w-5" /></span>
                <ChevronRight className="h-5 w-5 text-slate-300" />
              </div>
              <div className="mt-4 text-3xl font-black text-[#071b4d]">{count}</div>
              <div className="mt-1 font-extrabold text-[#071b4d]">{title}</div>
              <div className="mt-1 text-xs font-semibold text-slate-500">{note}</div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-heading text-lg font-black text-[#071b4d]">Business Snapshot</h2>
        <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-2 xl:grid-cols-4">
          {([
            ["Active Projects", "689", "+12 this month", FolderKanban, "text-blue-600"],
            ["This Month's Revenue", "PKR 48.7M", "+12% vs last month", CircleDollarSign, "text-emerald-600"],
            ["New Bookings", "148", "+18 today", CalendarDays, "text-violet-600"],
            ["Active Workers", "1,186", "94% available", HardHat, "text-amber-600"],
          ] satisfies [string, string, string, LucideIcon, string][]).map(([label, value, note, StatIcon, color], index) => {
            return (
              <div key={String(label)} className={`flex min-w-0 items-center gap-4 p-5 ${index ? "border-t border-slate-200 sm:border-l sm:border-t-0 sm:[&:nth-child(3)]:border-l-0 sm:[&:nth-child(3)]:border-t xl:[&:nth-child(3)]:border-l xl:[&:nth-child(3)]:border-t-0" : ""}`}>
                <StatIcon className={`h-7 w-7 shrink-0 ${color}`} />
                <div className="min-w-0"><div className="text-xs font-extrabold text-slate-500">{label}</div><div className="mt-1 truncate text-xl font-black text-[#071b4d]">{value}</div><div className="mt-1 text-xs font-bold text-emerald-600">{note}</div></div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-heading text-lg font-black text-[#071b4d]">Trends</h2>
        <div className="grid min-w-0 gap-5 xl:grid-cols-2">
          <div className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3"><div><h3 className="font-heading font-black">Revenue Overview</h3><p className="text-xs font-semibold text-slate-500">Monthly revenue in PKR millions</p></div><button className="rounded-md border border-slate-200 px-3 py-2 text-xs font-extrabold">This Year <ChevronDown className="ml-1 inline h-3 w-3" /></button></div>
            <div className="mt-6 grid h-64 grid-cols-12 items-end gap-1 border-b border-slate-200 bg-[linear-gradient(to_bottom,#e8edf4_1px,transparent_1px)] bg-[length:100%_42px] px-1 sm:gap-2">
              {bars.map((height, index) => <div key={index} className="flex h-full min-w-0 flex-col items-center justify-end gap-2"><span className="hidden text-[9px] font-black sm:block">{Math.round(height * 0.62)}M</span><div className="w-full max-w-8 rounded-t bg-blue-700" style={{ height: `${height}%` }} /><span className="text-[9px] font-bold text-slate-500">{["J","F","M","A","M","J","J","A","S","O","N","D"][index]}</span></div>)}
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div><h3 className="font-heading font-black">Bookings by Status</h3><p className="text-xs font-semibold text-slate-500">Current booking pipeline</p></div>
            <div className="mt-5 grid items-center gap-6 sm:grid-cols-[210px_minmax(0,1fr)]">
              <Donut />
              <div className="space-y-3">
                {[["New","812","32.6%","#1267de"],["Confirmed","632","25.4%","#22a95a"],["Rescheduled","298","12.0%","#f59e0b"],["Rejected","196","7.9%","#ef4444"],["Cancelled","551","22.1%","#dbe1ea"]].map(([label, value, percent, color]) => <div key={label} className="grid grid-cols-[12px_minmax(0,1fr)_auto_auto] items-center gap-3 text-sm"><span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} /><span className="font-extrabold">{label}</span><span className="font-black">{value}</span><span className="text-xs font-bold text-slate-400">{percent}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="font-heading text-lg font-black text-[#071b4d]">Recent Activity</h2><button onClick={() => navigate("activity")} className="text-xs font-extrabold text-blue-700">View all activity</button></div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          {recentActivity.map(([title, description, time, Icon, color], index) => (
            <div key={title} className={`grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 p-4 sm:p-5 ${index ? "border-t border-slate-100" : ""}`}>
              <span className={`grid h-10 w-10 place-items-center rounded-md ${color}`}><Icon className="h-5 w-5" /></span>
              <div className="min-w-0"><div className="truncate text-sm font-extrabold text-[#071b4d]">{title}</div><div className="mt-1 truncate text-xs font-medium text-slate-500">{description}</div></div>
              <span className="whitespace-nowrap text-[11px] font-bold text-slate-400">{time}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Accountant() {
  const [view, setView] = useState<"Money In" | "Money Out" | "Pending">("Money In");
  const [open, setOpen] = useState(false);
  const rows = [
    ["ACC-309", "25 Jun 2026", view === "Money Out" ? "OUT" : "IN", view === "Money Out" ? "Material Purchase" : "Client Payment", "PKR 1,500,000", "MB-1042", "Founder", view === "Money Out" ? "City Steel Traders" : "Ali Hassan", view === "Pending" ? "Pending" : "Completed", "receipt-309.pdf"],
    ["ACC-308", "24 Jun 2026", view === "Money Out" ? "OUT" : "IN", view === "Money Out" ? "Worker Salary" : "Investment", "PKR 850,000", "—", "Co-Founder", view === "Money Out" ? "Site Team A" : "Founder", view === "Pending" ? "Pending" : "Completed", "receipt-308.jpg"],
  ];
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div><div className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-700"><ShieldCheck className="h-4 w-4" />Founder & Co-Founder only</div><h1 className="font-heading text-3xl font-black text-[#071b4d]">Accountant</h1><p className="mt-1 text-sm text-slate-500">Company-level cash flow, vendor payments, purchases, salaries, and expenses.</p></div>
        <button onClick={() => setOpen(true)} className="flex h-11 items-center justify-center gap-2 rounded-md bg-blue-700 px-4 text-sm font-extrabold text-white"><Plus className="h-4 w-4" />Add Entry</button>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[["Total In","PKR 62.4M","text-emerald-600"],["Total Out","PKR 39.8M","text-red-600"],["Net Cash Position","PKR 22.6M","text-blue-700"]].map(([label,value,color]) => <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><div className="text-xs font-extrabold text-slate-500">{label}</div><div className={`mt-2 text-2xl font-black ${color}`}>{value}</div><div className="mt-2 text-xs font-bold text-slate-400">Selected period · June 2026</div></div>)}
      </div>
      <div className="flex gap-1 overflow-x-auto rounded-lg border border-slate-200 bg-white p-1">
        {(["Money In","Money Out","Pending"] as const).map((item) => <button key={item} onClick={() => setView(item)} className={`h-10 whitespace-nowrap rounded-md px-5 text-sm font-extrabold ${view === item ? "bg-[#071b4d] text-white" : "text-slate-500 hover:bg-slate-50"}`}>{item}</button>)}
      </div>
      <DataTable config={{ title: view, description: "", icon: WalletCards, columns: ["Entry ID","Date","Type","Category","Amount","Linked Project","Recorded By","Used By / Paid To","Status","Receipt / Proof"], rows, fields: [], rowActions: ["Edit","Delete","Complete"] }} onAction={() => setOpen(true)} />
      {open ? <Modal title="Add Accountant Entry" subtitle="Every edit or deletion is written to the immutable Activity Logs." onClose={() => setOpen(false)}><ModuleForm config={{ title: "Entry", description: "", icon: WalletCards, columns: [], rows: [], fields: [
        { label: "Type", type: "select", options: ["IN","OUT"], required: true },
        { label: "Category", type: "select", options: ["Client Payment","Investment","Other Income","Material Purchase","Worker Salary","Vendor Payment","Office Expense","Other"], required: true },
        { label: "Amount", type: "number", required: true },
        { label: "Linked Project" },
        { label: "Used By / Paid To" },
        { label: "Status", type: "select", options: ["Completed","Pending"] },
        { label: "Receipt / Proof", type: "file" },
      ] }} onClose={() => setOpen(false)} /></Modal> : null}
    </div>
  );
}

function AnalyticsPage({ reports = false }: { reports?: boolean }) {
  const cards = reports
    ? [["Monthly Revenue Report","Revenue by service, city, and period"],["Outstanding Payments Report","Due, pending review, and overdue payments"],["Worker Productivity Report","Milestones completed and on-time rate"],["Client List Export","Client profiles and lifetime spend"],["Project Status Summary","Status, progress, timeline, and value"]]
    : [["Revenue by Service Category","PKR 48.7M"],["Revenue by City","Lahore · 72%"],["Manager Performance","Usman · 94% on time"],["Worker Performance","1,845 milestones"],["Lead Source Breakdown","Website · 61%"],["Booking-to-Confirmation Rate","74.8%"],["Avg. Duration vs Estimate","+4.2 days"]];
  return (
    <div className="space-y-5">
      <div><p className="text-sm font-bold text-blue-700">Reports & Analytics</p><h1 className="mt-1 font-heading text-3xl font-black text-[#071b4d]">{reports ? "Reports" : "Analytics"}</h1><p className="mt-1 text-sm text-slate-500">{reports ? "Exportable operational and financial reporting." : "Filter business performance by date, city, and service."}</p></div>
      <div className="flex flex-wrap gap-3 rounded-lg border border-slate-200 bg-white p-3">
        <button className="flex h-10 items-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-extrabold"><CalendarDays className="h-4 w-4" />1–25 Jun 2026</button>
        <button className="flex h-10 items-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-extrabold"><Building2 className="h-4 w-4" />All Cities</button>
        <button className="flex h-10 items-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-extrabold"><SlidersHorizontal className="h-4 w-4" />All Services</button>
        <button className="ml-auto flex h-10 items-center gap-2 rounded-md bg-blue-700 px-4 text-sm font-extrabold text-white"><Download className="h-4 w-4" />Export {reports ? "PDF / Excel" : "Data"}</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(([title,value]) => <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-blue-700">{reports ? <FileSpreadsheet className="h-5 w-5" /> : <BarChart3 className="h-5 w-5" />}</span><button className="grid h-8 w-8 place-items-center rounded text-slate-400 hover:bg-slate-100">{reports ? <Download className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}</button></div><h2 className="mt-5 font-heading font-black text-[#071b4d]">{title}</h2><p className={`mt-2 ${reports ? "text-sm font-medium text-slate-500" : "text-2xl font-black text-blue-700"}`}>{value}</p></div>)}
      </div>
      {reports ? <div className="rounded-lg border border-blue-200 bg-blue-50 p-5"><div className="flex gap-3"><Mail className="h-5 w-5 text-blue-700" /><div><div className="font-extrabold text-[#071b4d]">Scheduled monthly email</div><div className="mt-1 text-sm text-slate-600">Founder and Co-Founder can schedule reports for automatic monthly delivery.</div></div></div></div> : null}
    </div>
  );
}

function SettingsPage() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-5">
      <div><div className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-700"><ShieldCheck className="h-4 w-4" />Founder & Co-Founder only</div><h1 className="font-heading text-3xl font-black text-[#071b4d]">Settings</h1><p className="mt-1 text-sm text-slate-500">Company-wide branding, service areas, hours, currency, and tax.</p></div>
      <form onSubmit={(event) => { event.preventDefault(); setSaved(true); }} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-6 p-5 sm:grid-cols-2 sm:p-7">
          {[["Company Name","Miraj Builders"],["Contact Email","info@mirajbuilders.pk"],["Contact Phone","+92 300 1234567"],["Currency","PKR"],["Tax Rate (%)","0"],["Business Hours","Mon–Sat · 9:00 AM–6:00 PM"]].map(([label,value]) => <label key={label}><span className="mb-2 block text-sm font-extrabold">{label}</span><input defaultValue={value} className="h-11 w-full rounded-md border border-slate-200 px-3.5 text-sm outline-none focus:border-blue-500" /></label>)}
          <label className="sm:col-span-2"><span className="mb-2 block text-sm font-extrabold">Cities / Areas Served</span><textarea defaultValue="Lahore, Islamabad, Rawalpindi" className="min-h-24 w-full rounded-md border border-slate-200 p-3.5 text-sm outline-none focus:border-blue-500" /></label>
          <label><span className="mb-2 block text-sm font-extrabold">Company Logo</span><input type="file" className="h-11 w-full rounded-md border border-slate-200 p-2 text-sm" /></label>
          <label><span className="mb-2 block text-sm font-extrabold">Brand Colors</span><div className="flex h-11 items-center gap-3 rounded-md border border-slate-200 px-3"><input type="color" defaultValue="#021f4f" /><input type="color" defaultValue="#d4a63a" /><span className="text-xs font-bold text-slate-500">Primary / Accent</span></div></label>
        </div>
        <div className="flex items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-7">{saved ? <span className="mr-auto text-sm font-bold text-emerald-600">Settings saved successfully.</span> : null}<button className="h-11 rounded-md bg-blue-700 px-5 text-sm font-extrabold text-white">Save Settings</button></div>
      </form>
    </div>
  );
}

function Sidebar({ active, setActive, open, setOpen }: { active: string; setActive: (key: string) => void; open: boolean; setOpen: (open: boolean) => void }) {
  const go = (key: string) => { setActive(key); setOpen(false); };
  return (
    <>
      {open ? <button className="fixed inset-0 z-30 bg-slate-950/45 xl:hidden" onClick={() => setOpen(false)} aria-label="Close navigation" /> : null}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[278px] flex-col bg-[#021f4f] text-white shadow-2xl transition-transform xl:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-[82px] items-center gap-3 border-b border-white/10 px-5">
          <Landmark className="h-10 w-10 shrink-0 text-amber-400" strokeWidth={1.7} />
          <div className="min-w-0 flex-1"><div className="truncate font-heading text-lg font-black">MIRAJ BUILDERS</div><div className="text-xs font-semibold text-white/65">Master Admin</div></div>
          <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-md text-white/70 xl:hidden"><PanelLeftClose className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <button onClick={() => go("dashboard")} className={`mb-4 flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-extrabold ${active === "dashboard" ? "bg-blue-600 text-white" : "text-white/85 hover:bg-white/10"}`}><LayoutDashboard className="h-5 w-5" />Dashboard</button>
          <button onClick={() => go("accountant")} className={`mb-5 flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-extrabold ${active === "accountant" ? "bg-amber-500 text-[#021f4f]" : "border border-amber-400/30 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"}`}><CircleDollarSign className="h-5 w-5" />Accountant <LockKeyhole className="ml-auto h-3.5 w-3.5" /></button>
          {navGroups.map((group) => <div key={group.label} className="mb-5"><div className="mb-2 px-3 text-[10px] font-black uppercase tracking-wider text-white/45">{group.label}</div><div className="space-y-0.5">{group.items.map(([key,label,Icon]) => <button key={key} onClick={() => go(key)} className={`flex h-9 w-full items-center gap-3 rounded-md px-3 text-left text-[13px] font-semibold ${active === key ? "bg-white/14 text-white" : "text-white/82 hover:bg-white/8"}`}><Icon className="h-4 w-4 shrink-0" /><span className="min-w-0 flex-1 truncate">{label}</span></button>)}</div></div>)}
        </nav>
        <div className="border-t border-white/10 p-3"><button className="flex w-full items-center gap-3 rounded-md p-3 hover:bg-white/8"><div className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 font-black text-[#021f4f]">UK</div><div className="min-w-0 flex-1 text-left"><div className="truncate text-sm font-extrabold">Usman Khan</div><div className="text-xs text-white/55">Founder · Super Admin</div></div><LogOut className="h-4 w-4 text-white/55" /></button></div>
      </aside>
    </>
  );
}

export default function AdminDashboard() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const activeConfig = moduleConfigs[active];
  const title = useMemo(() => active === "dashboard" ? "Master Admin Dashboard" : active === "accountant" ? "Accountant" : active === "analytics" ? "Analytics" : active === "reports" ? "Reports" : active === "settings" ? "Settings" : activeConfig?.title || "Admin", [active, activeConfig]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7fb] font-body text-[#071b4d]">
      <Sidebar active={active} setActive={setActive} open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="min-w-0 xl:pl-[278px]">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-[72px] items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button onClick={() => setSidebarOpen(true)} className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-slate-200 xl:hidden" aria-label="Open navigation"><Menu className="h-5 w-5" /></button>
            <div className="hidden min-w-0 sm:block"><div className="truncate text-sm font-black text-[#071b4d]">{title}</div><div className="text-xs font-semibold text-slate-400">Miraj Builders Platform</div></div>
            <label className="relative ml-auto hidden w-full max-w-sm lg:block"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input placeholder="Search anything..." className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:bg-white" /></label>
            <button className="relative grid h-10 w-10 shrink-0 place-items-center rounded-md border border-slate-200 bg-white"><Bell className="h-4 w-4" /><span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white">12</span></button>
            <button className="hidden h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-extrabold md:flex"><CalendarDays className="h-4 w-4" />25 Jun 2026<ChevronDown className="h-3 w-3" /></button>
            <button className="flex h-10 items-center gap-2 rounded-md bg-blue-700 px-3 text-xs font-extrabold text-white"><Sparkles className="h-4 w-4" /><span className="hidden sm:inline">Quick Actions</span><ChevronDown className="h-3 w-3" /></button>
          </div>
        </header>
        <div className="min-w-0 p-4 sm:p-6 lg:p-8">
          {active === "dashboard" ? <Dashboard navigate={setActive} /> : null}
          {active === "accountant" ? <Accountant /> : null}
          {active === "analytics" ? <AnalyticsPage /> : null}
          {active === "reports" ? <AnalyticsPage reports /> : null}
          {active === "settings" ? <SettingsPage /> : null}
          {activeConfig ? <ModulePage moduleKey={active} onOpenForm={() => setFormOpen(true)} onOpenReview={() => setReviewOpen(true)} /> : null}
        </div>
      </div>
      {formOpen && activeConfig ? <Modal title={activeConfig.primaryAction || `Add / Edit ${activeConfig.title}`} subtitle={activeConfig.description} onClose={() => setFormOpen(false)}><ModuleForm config={activeConfig} onClose={() => setFormOpen(false)} /></Modal> : null}
      {reviewOpen ? <Modal title="Booking BK-2489" subtitle="Full 6-step booking wizard submission" onClose={() => setReviewOpen(false)}><BookingReview onClose={() => setReviewOpen(false)} /></Modal> : null}
    </main>
  );
}
