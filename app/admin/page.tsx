import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Database,
  FileBarChart2,
  FileText,
  FolderKanban,
  Gauge,
  HardHat,
  HelpCircle,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  Milestone,
  PackageCheck,
  Search,
  Server,
  Settings,
  Sparkles,
  Users,
  WalletCards,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Master Admin Dashboard",
  description: "Admin dashboard for Miraj Builders platform operations.",
};

const navSections = [
  {
    title: "Management",
    items: [
      { label: "Departments", icon: Building2 },
      { label: "Services & Sub-Services", icon: PackageCheck },
      { label: "Managers", icon: Users },
      { label: "Workers", icon: HardHat },
      { label: "Clients", icon: Users },
      { label: "Roles & Permissions", icon: LockKeyhole },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Bookings", icon: CalendarDays, chevron: true },
      { label: "Projects", icon: FolderKanban, chevron: true },
      { label: "Milestones", icon: Milestone },
      { label: "Payments & Finance", icon: WalletCards },
      { label: "Disputes / Issues", icon: HelpCircle },
      { label: "Meetings", icon: CalendarDays },
    ],
  },
  {
    title: "Reports & Analytics",
    items: [
      { label: "Analytics", icon: FileBarChart2 },
      { label: "Reports", icon: ClipboardCheck },
      { label: "Activity Logs", icon: Clock3 },
      { label: "WhatsApp Logs", icon: MessageCircle },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", icon: Settings },
      { label: "Templates", icon: FileText },
      { label: "Integrations", icon: Wrench },
      { label: "System Logs", icon: FileText },
      { label: "Backup & Restore", icon: BriefcaseBusiness },
    ],
  },
];

const statCards = [
  {
    title: "Total Bookings",
    value: "2,489",
    note: "+18 today",
    icon: CalendarDays,
    color: "blue",
    spark: "M0 34 L16 28 L29 30 L42 20 L56 24 L72 14 L86 18 L100 8",
  },
  {
    title: "Total Projects",
    value: "1,245",
    note: "+25 this week",
    icon: FolderKanban,
    color: "amber",
    spark: "M0 34 L14 25 L28 28 L42 16 L56 14 L72 20 L86 10 L100 13",
  },
  {
    title: "Active Projects",
    value: "689",
    note: "+12 this week",
    icon: Building2,
    color: "green",
    spark: "M0 35 L12 28 L25 30 L38 19 L52 22 L66 14 L82 17 L100 8",
  },
  {
    title: "Completed Projects",
    value: "556",
    note: "+42 this month",
    icon: CheckCircle2,
    color: "violet",
    spark: "M0 35 L15 28 L29 30 L43 20 L58 23 L72 14 L86 16 L100 10",
  },
  {
    title: "Total Revenue",
    value: "PKR 48,750,000",
    note: "+12% this month",
    icon: CircleDollarSign,
    color: "orange",
    spark: "M0 34 L15 25 L30 27 L45 17 L60 20 L75 11 L88 15 L100 8",
  },
  {
    title: "Pending Payments",
    value: "PKR 9,250,000",
    note: "32 invoices",
    icon: WalletCards,
    color: "red",
    spark: "M0 35 L15 28 L29 31 L44 21 L58 23 L73 15 L88 17 L100 9",
  },
  {
    title: "Total Workers",
    value: "1,186",
    note: "Active",
    icon: HardHat,
    color: "cyan",
    spark: "",
  },
];

const statusSlices = [
  { label: "New", value: 812, percent: "32.6%", color: "#1267de" },
  { label: "Confirmed", value: 632, percent: "25.4%", color: "#22a95a" },
  { label: "Rescheduled", value: 298, percent: "12.0%", color: "#f59e0b" },
  { label: "Rejected", value: 196, percent: "7.9%", color: "#ef2626" },
  { label: "Cancelled", value: 551, percent: "22.1%", color: "#d8dde6" },
];

const projectSlices = [
  { label: "Construction & Renovation", value: 428, percent: "34.4%", color: "#1267de" },
  { label: "Solar Energy", value: 236, percent: "19.0%", color: "#22a95a" },
  { label: "Electrical Works", value: 188, percent: "15.1%", color: "#f59e0b" },
  { label: "Plumbing Works", value: 154, percent: "12.4%", color: "#7c3aed" },
  { label: "Carpentry & Woodwork", value: 96, percent: "7.7%", color: "#16a5a5" },
  { label: "Interior Design", value: 78, percent: "6.3%", color: "#e93b8c" },
  { label: "Paint & Finishing", value: 65, percent: "5.2%", color: "#b9c1cf" },
];

const revenueBars = [
  ["Jan", 22.1],
  ["Feb", 24.8],
  ["Mar", 28.7],
  ["Apr", 36.2],
  ["May", 48.7],
  ["Jun", 42.1],
  ["Jul", 45.3],
  ["Aug", 41.8],
  ["Sep", 38.4],
  ["Oct", 35.6],
  ["Nov", 32.2],
  ["Dec", 29.8],
];

const departments = [
  ["Construction & Renovation", "PKR 22,450,000", "46%", "blue"],
  ["Solar Energy", "PKR 11,200,000", "23%", "orange"],
  ["Electrical Works", "PKR 7,850,000", "16%", "amber"],
  ["Plumbing Works", "PKR 4,750,000", "10%", "cyan"],
  ["Interior Design", "PKR 1,950,000", "4%", "rose"],
  ["Carpentry & Woodwork", "PKR 1,250,000", "3%", "yellow"],
  ["Paint & Finishing", "PKR 1,050,000", "2%", "red"],
];

const trend = [320, 356, 389, 412, 378, 362, 272];
const trendDays = ["18 May", "19 May", "20 May", "21 May", "22 May", "23 May", "24 May"];

const projectStatus = [
  ["Active", 689, "bg-blue-600", "w-[78%]"],
  ["Completed", 556, "bg-green-500", "w-[63%]"],
  ["On Hold", 82, "bg-amber-500", "w-[18%]"],
  ["Cancelled", 57, "bg-red-500", "w-[13%]"],
  ["Draft", 23, "bg-slate-300", "w-[8%]"],
];

const bookings = [
  ["BK-2024-0248", "Solar Installation (10KW)", "DHA Lahore", "10:30 AM", "New", "blue"],
  ["BK-2024-0247", "Full House Construction", "Bahria Town, Lahore", "10:15 AM", "Confirmed", "green"],
  ["BK-2024-0246", "Interior Design (1st Floor)", "Bahria Town, Lahore", "09:45 AM", "New", "blue"],
  ["BK-2024-0245", "Electrical Rewiring", "Gulberg, Lahore", "09:30 AM", "Rescheduled", "orange"],
  ["BK-2024-0244", "Plumbing System (Full)", "Johar Town, Lahore", "09:10 AM", "Confirmed", "green"],
];

const managers = [
  ["UK", "Usman Khan", "Construction & Renovation", "78 Projects"],
  ["RA", "Rizwan Ahmed", "Solar Energy", "54 Projects"],
  ["IA", "Imran Ali", "Electrical Works", "46 Projects"],
  ["NA", "Waqas Ahmed", "Plumbing Works", "38 Projects"],
  ["SF", "Sana Farooq", "Interior Design", "32 Projects"],
];

const attention = [
  ["Bookings to Confirm", 48, "red", CalendarDays],
  ["Projects to Approve", 21, "orange", FolderKanban],
  ["Milestones to Approve", 31, "red", Milestone],
  ["Payments to Verify", 17, "green", WalletCards],
  ["Issues / Disputes", 9, "red", HelpCircle],
  ["Worker Requests", 14, "blue", HardHat],
] satisfies [string, number, string, LucideIcon][];

const systemRows = [
  ["Server Status", "Operational", Server, "green"],
  ["Database", "Healthy", Database, "green"],
  ["Backup (Last 24h)", "Successful", BriefcaseBusiness, "green"],
  ["WhatsApp Service", "Connected", MessageCircle, "green"],
  ["Email Service", "Connected", FileText, "green"],
] satisfies [string, string, LucideIcon, string][];

const activities = [
  ["New department 'Paint & Finishing' added", "By Usman Khan", "24 May, 10:20 AM", Building2],
  ["New manager 'Sana Farooq' added", "By Usman Khan", "24 May, 09:45 AM", Users],
  ["Service 'Solar + Battery Backup System' added", "By Usman Khan", "24 May, 09:15 AM", PackageCheck],
  ["Payment of PKR 1,500,000 received", "From Construction Site", "24 May, 11:00 AM", WalletCards],
  ["System backup completed successfully", "24 May, 02:00 AM", "", ClipboardCheck],
] satisfies [string, string, string, LucideIcon][];

function colorClasses(color: string) {
  const colors: Record<string, string> = {
    amber: "bg-amber-50 text-amber-600 ring-amber-100",
    blue: "bg-blue-50 text-blue-600 ring-blue-100",
    cyan: "bg-cyan-50 text-cyan-600 ring-cyan-100",
    green: "bg-green-50 text-green-600 ring-green-100",
    orange: "bg-orange-50 text-orange-600 ring-orange-100",
    red: "bg-red-50 text-red-600 ring-red-100",
    rose: "bg-rose-50 text-rose-600 ring-rose-100",
    violet: "bg-violet-50 text-violet-600 ring-violet-100",
    yellow: "bg-yellow-50 text-yellow-600 ring-yellow-100",
  };

  return colors[color] || colors.blue;
}

function DonutChart({
  data,
  total,
  subtitle,
  size = 178,
}: {
  data: { value: number; color: string }[];
  total: string;
  subtitle: string;
  size?: number;
}) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const sum = data.reduce((acc, item) => acc + item.value, 0);
  let offset = 0;

  return (
    <div
      className="relative mx-auto grid aspect-square max-w-full place-items-center"
      style={{ width: size }}
    >
      <svg viewBox="0 0 150 150" className="h-full w-full -rotate-90">
        <circle cx="75" cy="75" r={radius} fill="none" stroke="#e5e8ee" strokeWidth="22" />
        {data.map((item) => {
          const dash = (item.value / sum) * circumference;
          const circle = (
            <circle
              key={`${item.color}-${item.value}`}
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke={item.color}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              strokeWidth="22"
            />
          );
          offset += dash;
          return circle;
        })}
      </svg>
      <div className="absolute text-center">
        <div className="font-heading text-3xl font-black text-[#091b4f]">{total}</div>
        <div className="mt-1 text-xs font-bold text-[#091b4f]">{subtitle}</div>
      </div>
    </div>
  );
}

function Panel({
  title,
  action,
  children,
  className = "",
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_24px_rgba(2,31,79,0.06)] ${className}`}>
      <div className="flex items-center justify-between px-5 pt-5">
        <h2 className="font-heading text-base font-extrabold text-[#091b4f]">{title}</h2>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export default function AdminDashboardPage() {
  const trendPoints = trend
    .map((value, index) => {
      const x = 24 + index * 58;
      const y = 154 - ((value - 240) / 190) * 118;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7fb] font-body text-[#091b4f]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[278px] flex-col bg-[#021f4f] text-white shadow-2xl xl:flex">
        <div className="flex h-[92px] items-center gap-3 px-6">
          <div className="grid h-12 w-12 place-items-center text-amber-400">
            <Landmark className="h-10 w-10" strokeWidth={1.8} />
          </div>
          <div>
            <div className="font-heading text-xl font-black tracking-tight">CONSTRUCTION SITE</div>
            <div className="mt-1 text-sm font-medium text-white/85">Master Admin</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 pb-4">
          <a className="mb-5 flex h-12 items-center gap-3 rounded-md bg-blue-600 px-4 text-sm font-extrabold shadow-lg shadow-blue-950/20">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </a>
          {navSections.map((section) => (
            <div key={section.title} className="mb-5">
              <div className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-white/62">{section.title}</div>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <a key={item.label} className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-semibold text-white/92 transition hover:bg-white/8">
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    {item.chevron ? <ChevronDown className="h-4 w-4" /> : null}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 p-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-slate-200 text-lg font-black text-[#021f4f]">UK</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-base font-extrabold">Usman Khan</div>
              <div className="text-xs text-white/75">Super Admin</div>
            </div>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </aside>

      <div className="min-w-0 xl:pl-[278px]">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#f8fafee8] backdrop-blur">
          <div className="flex min-h-[84px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 2xl:flex-row 2xl:items-center 2xl:justify-between">
            <div>
              <h1 className="font-heading text-2xl font-black tracking-tight sm:text-3xl">Master Admin Dashboard</h1>
              <p className="mt-1 font-heading text-sm font-bold sm:text-base">Complete overview of your platform.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="relative block w-full sm:w-[280px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input className="h-11 w-full rounded-md border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none ring-blue-500/20 transition placeholder:text-slate-400 focus:ring-4" placeholder="Search anything..." />
              </label>
              <div className="hidden items-center gap-2 font-heading text-sm font-extrabold text-[#091b4f] md:flex">
                <MessageCircle className="h-5 w-5 text-lime-600" />
                +92 300 1234567
              </div>
              <button className="relative grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white">12</span>
              </button>
              <button className="flex h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-4 font-heading text-sm font-extrabold">
                <CalendarDays className="h-5 w-5" />
                24 May 2024
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex h-11 items-center gap-2 rounded-md bg-blue-700 px-4 font-heading text-sm font-extrabold text-white shadow-sm">
                <Sparkles className="h-5 w-5" />
                Quick Actions
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <div className="min-w-0 space-y-5 px-4 py-5 sm:px-6 lg:px-8">
          <section className="admin-stat-grid grid gap-4">
            {statCards.map((card) => (
              <div key={card.title} className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(2,31,79,0.06)]">
                <div className="flex items-start gap-4">
                  <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-lg ring-1 ${colorClasses(card.color)}`}>
                    <card.icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-[#091b4f]">{card.title}</div>
                    <div className="mt-2 whitespace-nowrap font-heading text-[clamp(1rem,1.15vw,1.5rem)] font-black leading-tight">{card.value}</div>
                    <div className={`mt-3 text-xs font-extrabold ${card.color === "red" ? "text-red-600" : "text-green-600"}`}>{card.note}</div>
                  </div>
                </div>
                {card.spark ? (
                  <svg viewBox="0 0 100 40" className="ml-auto mt-1 h-8 w-24">
                    <path d={card.spark} fill="none" stroke={card.color === "red" ? "#ef2626" : card.color === "orange" ? "#f59e0b" : card.color === "violet" ? "#7c3aed" : card.color === "green" ? "#22a95a" : "#1267de"} strokeWidth="2.5" />
                  </svg>
                ) : null}
              </div>
            ))}
          </section>

          <section className="grid min-w-0 gap-5 xl:grid-cols-12">
            <Panel title="Bookings by Status" className="xl:col-span-4">
              <div className="grid min-w-0 items-center gap-5 lg:grid-cols-[minmax(130px,178px)_minmax(0,1fr)]">
                <DonutChart data={statusSlices} total="2,489" subtitle="Total" size={170} />
                <div className="min-w-0 space-y-4">
                  {statusSlices.map((item) => (
                    <div key={item.label} className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 text-sm">
                      <span className="flex min-w-0 items-center gap-3 font-bold"><span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: item.color }} /><span className="truncate">{item.label}</span></span>
                      <span className="font-extrabold">{item.value}</span>
                      <span className="font-semibold text-slate-500">({item.percent})</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel title="Projects Overview" className="xl:col-span-4">
              <div className="grid min-w-0 items-center gap-5 lg:grid-cols-[minmax(130px,178px)_minmax(0,1fr)]">
                <DonutChart data={projectSlices} total="1,245" subtitle="Total Projects" size={170} />
                <div className="min-w-0 space-y-3">
                  {projectSlices.map((item) => (
                    <div key={item.label} className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 text-xs">
                      <span className="flex min-w-0 items-center gap-3 font-bold"><span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: item.color }} /><span className="truncate">{item.label}</span></span>
                      <span className="font-extrabold">{item.value}</span>
                      <span className="font-semibold text-slate-500">({item.percent})</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel title="Revenue Overview" action={<button className="rounded-md border border-slate-200 px-4 py-2 text-xs font-extrabold">This Year <ChevronDown className="ml-2 inline h-3 w-3" /></button>} className="xl:col-span-4">
              <div className="h-[205px]">
                <div className="grid h-full min-w-0 grid-cols-[34px_minmax(0,1fr)] gap-3">
                  <div className="flex flex-col justify-between pb-8 pt-2 text-[11px] font-bold text-slate-500">
                    <span>60M</span><span>50M</span><span>40M</span><span>30M</span><span>20M</span><span>10M</span><span>0</span>
                  </div>
                  <div className="grid min-w-0 grid-cols-12 items-end gap-1 border-b border-slate-200 bg-[linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[length:100%_28px] px-1 pb-2 sm:gap-2 sm:px-2">
                    {revenueBars.map(([month, value]) => (
                      <div key={month} className="flex min-w-0 flex-col items-center justify-end gap-2">
                        <div className="max-w-full truncate text-[10px] font-black sm:text-[11px]">{value}M</div>
                        <div className="w-full max-w-7 rounded-t bg-blue-700 shadow-sm" style={{ height: `${(Number(value) / 60) * 132}px` }} />
                        <div className="text-[10px] font-bold text-slate-600 sm:text-[11px]">{month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          </section>

          <section className="grid gap-5 xl:grid-cols-12">
            <Panel title="Top Departments (By Revenue)" action={<a className="text-xs font-extrabold text-blue-600">View All</a>} className="xl:col-span-3">
              <div className="space-y-3">
                {departments.map(([name, revenue, percent, color], index) => (
                  <div key={name} className="grid grid-cols-[20px_32px_1fr_auto_auto] items-center gap-3 text-xs">
                    <span className="font-black">{index + 1}</span>
                    <span className={`grid h-7 w-7 place-items-center rounded ${colorClasses(color)}`}><Building2 className="h-4 w-4" /></span>
                    <span className="truncate font-extrabold">{name}</span>
                    <span className="font-extrabold">{revenue}</span>
                    <span className="font-bold text-slate-500">{percent}</span>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Bookings Trend (Last 7 Days)" className="xl:col-span-3">
              <svg viewBox="0 0 410 210" className="h-[210px] w-full">
                {[0, 1, 2, 3, 4].map((i) => <line key={i} x1="20" x2="395" y1={35 + i * 35} y2={35 + i * 35} stroke="#e5e7eb" />)}
                <polyline fill="none" points={trendPoints} stroke="#1267de" strokeWidth="3" />
                {trend.map((value, index) => {
                  const x = 24 + index * 58;
                  const y = 154 - ((value - 240) / 190) * 118;
                  return (
                    <g key={value}>
                      <circle cx={x} cy={y} r="5" fill="#1267de" />
                      <text x={x} y={y - 13} textAnchor="middle" className="fill-[#091b4f] text-[11px] font-black">{value}</text>
                      <text x={x} y="198" textAnchor="middle" className="fill-slate-500 text-[10px] font-bold">{trendDays[index]}</text>
                    </g>
                  );
                })}
              </svg>
            </Panel>

            <Panel title="Projects Status Overview" action={<a className="text-xs font-extrabold text-blue-600">View All</a>} className="xl:col-span-3">
              <div className="space-y-5">
                {projectStatus.map(([label, value, color, width]) => (
                  <div key={label} className="grid grid-cols-[84px_1fr_42px] items-center gap-3 text-sm">
                    <span className="font-bold">{label}</span>
                    <div className="h-2 rounded-full bg-slate-100"><div className={`h-2 rounded-full ${color} ${width}`} /></div>
                    <span className="text-right font-black">{value}</span>
                  </div>
                ))}
                <div className="border-t border-slate-200 pt-4 text-sm font-extrabold">Total Projects: 1,245</div>
              </div>
            </Panel>

            <Panel title="Recent Bookings" action={<a className="text-xs font-extrabold text-blue-600">View All</a>} className="xl:col-span-3">
              <div className="space-y-4">
                {bookings.map(([id, title, place, time, status, color]) => (
                  <div key={id} className="grid grid-cols-[34px_1fr_auto_auto] items-center gap-3 text-xs">
                    <span className={`grid h-8 w-8 place-items-center rounded ${colorClasses(color)}`}><Building2 className="h-4 w-4" /></span>
                    <span>
                      <span className="mb-1 block font-black">{id}</span>
                      <span className="block font-extrabold">{title}</span>
                      <span className="text-slate-500">{place}</span>
                    </span>
                    <span className="font-bold text-slate-500">{time}</span>
                    <span className={`rounded-md px-3 py-1 text-[11px] font-black ${colorClasses(color)}`}>{status}</span>
                  </div>
                ))}
              </div>
            </Panel>
          </section>

          <section className="grid gap-5 xl:grid-cols-12">
            <Panel title="Top Managers (By Projects)" action={<a className="text-xs font-extrabold text-blue-600">View All</a>} className="xl:col-span-3">
              <div className="space-y-3">
                {managers.map(([initials, name, role, count]) => (
                  <div key={name} className="grid grid-cols-[42px_1fr_auto] items-center gap-3 text-xs">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-slate-200 to-amber-100 font-black">{initials}</div>
                    <div>
                      <div className="font-black">{name}</div>
                      <div className="text-slate-500">{role}</div>
                    </div>
                    <div className="font-extrabold">{count}</div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Payments Summary" action={<button className="rounded-md border border-slate-200 px-4 py-2 text-xs font-extrabold">This Month</button>} className="xl:col-span-3">
              <div className="grid items-center gap-5 md:grid-cols-[160px_1fr]">
                <DonutChart data={[{ value: 68, color: "#1267de" }, { value: 32, color: "#e5e8ee" }]} total="68%" subtitle="Paid" size={150} />
                <div className="space-y-5 text-sm">
                  <div className="flex justify-between gap-3"><span className="font-bold text-slate-500">Total Invoiced</span><b>PKR 15,250,000</b></div>
                  <div className="flex justify-between gap-3"><span className="font-bold text-slate-500">Paid Amount</span><b className="text-green-600">PKR 10,420,000</b></div>
                  <div className="flex justify-between gap-3"><span className="font-bold text-slate-500">Pending Amount</span><b className="text-red-600">PKR 4,830,000</b></div>
                </div>
              </div>
              <button className="ml-auto mt-4 block rounded-md border border-slate-200 px-10 py-3 text-sm font-black">View All Payments</button>
            </Panel>

            <Panel title="Tasks Requiring Attention" action={<a className="text-xs font-extrabold text-blue-600">View All</a>} className="xl:col-span-3">
              <div className="space-y-4">
                {attention.map(([label, count, color, Icon]) => (
                  <div key={String(label)} className="grid grid-cols-[34px_1fr_auto] items-center gap-3 text-sm">
                    <span className={`grid h-8 w-8 place-items-center rounded ${colorClasses(String(color))}`}><Icon className="h-4 w-4" /></span>
                    <span className="font-extrabold">{label}</span>
                    <span className={`grid h-6 min-w-6 place-items-center rounded-full px-1 text-[11px] font-black text-white ${color === "green" ? "bg-green-600" : color === "blue" ? "bg-blue-600" : color === "orange" ? "bg-orange-500" : "bg-red-600"}`}>{count}</span>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="System Overview" className="xl:col-span-3">
              <div className="space-y-4">
                {systemRows.map(([label, status, Icon]) => (
                  <div key={String(label)} className="grid grid-cols-[28px_1fr_auto] items-center gap-3 text-sm">
                    <Icon className="h-5 w-5 text-[#091b4f]" />
                    <span className="font-extrabold">{label}</span>
                    <span className="flex items-center gap-2 font-black text-green-600">{status}<CheckCircle2 className="h-4 w-4" /></span>
                  </div>
                ))}
                <div className="grid grid-cols-[28px_1fr_auto] items-center gap-3 text-sm">
                  <Gauge className="h-5 w-5" />
                  <span className="font-extrabold">Storage Used</span>
                  <span className="font-black">62% (124 GB / 200 GB)</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100"><div className="h-2 w-[62%] rounded-full bg-blue-700" /></div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-sm font-extrabold">
                  <span className="flex items-center gap-2"><Users className="h-5 w-5" />Active Users (All Roles)</span>
                  <span className="flex items-center gap-2"><Users className="h-5 w-5" />286 Online</span>
                </div>
              </div>
            </Panel>
          </section>

          <Panel title="Recent System Activities" action={<a className="text-xs font-extrabold text-blue-600">View All</a>}>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {activities.map(([title, by, time, Icon]) => (
                <div key={String(title)} className="grid grid-cols-[38px_1fr] gap-3 text-xs">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-blue-50 text-blue-600"><Icon className="h-5 w-5" /></span>
                  <span>
                    <span className="block font-black">{title}</span>
                    <span className="mt-2 block text-slate-500">{by}</span>
                    <span className="mt-1 block text-slate-500">{time}</span>
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </main>
  );
}
