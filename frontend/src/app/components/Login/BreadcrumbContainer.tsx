import { ChevronDown } from 'lucide-react';

export default function BreadcrumbContainer() {
  return (
    <div className="w-[40%] h-[40%]">
      <div>
        <div className="text-center space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Sua Jornada Começa Aqui!
            </h1>
            <p className="text-gray-400">
              Complete esses passos para registrar sua conta
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#1b1b1b] text-white">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-xs font-semibold">
                  1
                </span>
                <span className="text-sm font-medium">Crie sua conta</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white text-black">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-xs font-semibold">
                  2
                </span>
                <span className="text-sm font-medium">Login</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#1B1B1B] text-white">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-xs font-semibold">
                  3
                </span>
                <span className="text-sm font-medium">
                  Configure seu espaço
                </span>
              </div>
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
