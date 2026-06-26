import { Home, PlusCircle, PieChart, Trophy, ClockArrowUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/i18n";

const NAV_ITEMS: { path: string; icon: typeof Home; labelKey: TranslationKey; isMain?: boolean }[] = [
  { path: "/", icon: Home, labelKey: "navHome" },
  { path: "/budgets", icon: PieChart, labelKey: "navBudget" },
  { path: "/add", icon: PlusCircle, labelKey: "navAdd", isMain: true },
  { path: "/history", icon: ClockArrowUp, labelKey: "navHistory" },
  { path: "/achievements", icon: Trophy, labelKey: "navXp" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <nav className="fixed bottom-6 left-4 right-4 z-50 max-w-lg mx-auto pb-safe">
      <div className="clay-card bg-card/90 backdrop-blur-xl px-2 py-2 grid grid-cols-5 items-center">
        {NAV_ITEMS.map(item => {
          const active = location.pathname === item.path;
          if (item.isMain) {
            return (
              <div key={item.path} className="flex justify-center">
                <button
                  onClick={() => navigate(item.path)}
                  aria-label={t(item.labelKey)}
                  className="flex items-center justify-center w-14 h-14 -mt-8 rounded-full clay-btn text-primary-foreground transition-transform"
                >
                  <item.icon className="w-7 h-7" />
                </button>
              </div>
            );
          }
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 h-14 rounded-xl transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-semibold leading-none">{t(item.labelKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
