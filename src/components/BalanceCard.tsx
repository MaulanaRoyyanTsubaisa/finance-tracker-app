import { TrendingUp, TrendingDown } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import Mascot from "./Mascot";
import { useLanguage } from "@/contexts/LanguageContext";

interface BalanceCardProps {
  balance: number;
  totalIncome: number;
  totalExpense: number;
  mascotMood: "happy" | "neutral" | "worried" | "broke";
}

export default function BalanceCard({ balance, totalIncome, totalExpense, mascotMood }: BalanceCardProps) {
  const { t } = useLanguage();
  const { formatMoney } = useCurrency();

  return (
    <div className="gradient-hero rounded-3xl p-6 text-primary-foreground shadow-soft animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs opacity-90 font-medium uppercase tracking-wide">{t("totalBalance")}</p>
          <h2 className="text-2xl font-extrabold mt-1 truncate">{formatMoney(balance)}</h2>
        </div>
        <Mascot mood={mascotMood} size="sm" showMessage variant="bubble" />
      </div>
      <div className="flex gap-4 mt-5">
        <div className="flex items-center gap-2 bg-primary-foreground/20 rounded-2xl px-3 py-2 flex-1">
          <div className="w-8 h-8 rounded-full bg-primary-foreground/30 flex items-center justify-center">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] opacity-80">{t("income")}</p>
            <p className="text-xs font-bold">{formatMoney(totalIncome)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-primary-foreground/20 rounded-2xl px-3 py-2 flex-1">
          <div className="w-8 h-8 rounded-full bg-primary-foreground/30 flex items-center justify-center">
            <TrendingDown className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] opacity-80">{t("expense")}</p>
            <p className="text-xs font-bold">{formatMoney(totalExpense)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
