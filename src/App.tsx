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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Constantes criadas para seleção de data de nascimento
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

const schema = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }),
  surname: z.string().nonempty({ message: 'Sobrenome é obrigatório' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  company: z.string().optional(),
  day: z.number().int().min(1).max(31),
  month: z.number().int().min(1).max(12),
  year: z
    .number()
    .int()
    .min(currentYear - 50)
    .max(currentYear),
});

type FormData = z.infer<typeof schema>;

export function App() {
  // Função para registrar os campos do formulário
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Função para submeter os dados do formulário
  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-900">
      <div className="w-full max-w-2xl bg-zinc-800 shadow rounded p-8">
        <h1 className="text-center font-bold text-violet-400 text-2xl">
          Cadastro
        </h1>

        <form
          action=""
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Label className="text-white">Nome</Label>
              <Input
                type="text"
                {...register('name')}
                className="text-white border-green-100 mt-2 space-y-3"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <Label className="text-white">Sobrenome</Label>
              <Input
                type="text"
                {...register('surname')}
                className="text-white border-green-100 mt-2 space-y-3"
              />
              {errors.surname && (
                <span className="text-red-500 text-xs">
                  {errors.surname.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <Label className="text-white">E-mail</Label>
              <Input
                type="email"
                {...register('email')}
                className="text-white border-green-100 mt-2 space-y-3"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <Label className="text-white">Empresa</Label>
              <Input
                type="text"
                {...register('company')}
                className="text-white border-green-100 mt-2 space-y-3"
              />
              {errors.company && (
                <span className="text-red-500 text-xs">
                  {errors.company.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 items-end">
            <div>
              <Label className="text-white">Data de Nascimento</Label>
              <div className="mt-2 text-white">
                <Select
                  onValueChange={(value) => setValue('day', Number(value))}
                >
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
                <Select
                  onValueChange={(value) => setValue('month', Number(value))}
                >
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
                <Select
                  onValueChange={(value) => setValue('year', Number(value))}
                >
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
