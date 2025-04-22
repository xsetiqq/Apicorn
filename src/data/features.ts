import { Clock, Terminal, Variable } from 'lucide-react';

export const features = [
  {
    icon: Terminal,
    iconClassName: 'w-6 h-6 text-blue-600',
    titleKey: 'restClient',
    descriptionKey: 'restClient',
    textColor: 'text-blue-600',
    iconBgColor: 'bg-blue-100',
    borderColor: 'border-blue-100',
  },
  {
    icon: Clock,
    iconClassName: 'w-6 h-6 text-green-600',
    titleKey: 'history',
    descriptionKey: 'history',
    textColor: 'text-green-600',
    iconBgColor: 'bg-green-100',
    borderColor: 'border-green-100',
  },
  {
    icon: Variable,
    iconClassName: 'w-6 h-6 text-purple-600',
    titleKey: 'variables',
    descriptionKey: 'variables',
    textColor: 'text-purple-600',
    iconBgColor: 'bg-purple-100',
    borderColor: 'border-purple-100',
  },
];
