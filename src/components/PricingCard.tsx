import { motion } from 'framer-motion';

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  icon: string;
  glowColor: string;
};

export default function PricingCard({ title, price, description, icon, glowColor }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-6 rounded-2xl border bg-black/30 backdrop-blur-lg border-white/20 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r ${glowColor} opacity-20 blur-xl -z-10"></div>
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-lg text-green-400 font-semibold mb-2">{price}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
