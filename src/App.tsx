import './styles/global.css';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Button } from './components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';

// Array pra dias do mês de 1 a 31
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

export function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-900">
      <div className="w-full max-w-2xl bg-zinc-800 shadow rounded p-8">
        <h1 className="text-center font-bold text-violet-400 text-2xl">
          Cadastro
        </h1>

        <form action="" className="mt-8 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Label className="text-white">Nome</Label>
              <Input
                type="text"
                className="text-white border-green-100 mt-2 space-y-3"
              />
            </div>
            <div>
              <Label className="text-white">Sobrenome</Label>
              <Input
                type="text"
                className="text-white border-green-100 mt-2 space-y-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <Label className="text-white">E-mail</Label>
              <Input
                type="email"
                className="text-white border-green-100 mt-2 space-y-3"
              />
            </div>
            <div>
              <Label className="text-white">Empresa</Label>
              <Input
                type="text"
                className="text-white border-green-100 mt-2 space-y-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 items-end">
            <div>
              <Label className="text-white">Data de Nascimento</Label>
              <div className="mt-2 text-white">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Dia" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <div className="mt-2 text-white">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Mês" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <div className="mt-2 text-white">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button type="submit" className="mt-4">
            Registrar
          </Button>
        </form>
      </div>
    </div>
  );
}
