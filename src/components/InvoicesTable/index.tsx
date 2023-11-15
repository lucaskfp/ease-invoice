import {
  Card,
  CardBody,
  Chip,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Input, NewInvoiceButton } from "..";

import { Search } from "lucide-react";
import db from "../../db.json";

export function InvoicesTable() {
  return (
    <>
      <Card as="section" className="shadow-none">
        <CardBody>
          <div className="flex gap-4 items-center">
            <Input
              placeholder="Procurar fatura"
              className="max-w-xs mr-auto"
              startContent={<Search className="pointer-events-none" />}
              variant="bordered"
              color="primary"
            />

            <Input
              value={`${new Date().getFullYear()}-${new Date().getMonth() + 1}`}
              type="month"
              className="max-w-[200px]"
              variant="bordered"
              color="primary"
            />

            <NewInvoiceButton />
          </div>

          <Spacer y={6} />

          <Table
            aria-label="Lista de faturas"
            className="[&_div]:shadow-none [&_div]:p-0"
            selectionMode="single"
          >
            <TableHeader className="font-bold">
              <TableColumn>Nome</TableColumn>
              <TableColumn>Valor</TableColumn>
              <TableColumn>Vencimento</TableColumn>
              <TableColumn className="text-right pr-10">Status</TableColumn>
            </TableHeader>

            <TableBody items={db}>
              {(item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.amount / 100)}
                  </TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("pt-BR", {
                      dateStyle: "short",
                    }).format(new Date(item.due_date))}
                  </TableCell>
                  <TableCell className="text-right">
                    {item.paid ? (
                      <Chip
                        size="sm"
                        variant="flat"
                        color="success"
                        className="[&_>_*]:font-semibold [&_>_*]:px-3 min-w-[70px] text-center"
                      >
                        Paga
                      </Chip>
                    ) : (
                      <Chip
                        size="sm"
                        variant="flat"
                        color="danger"
                        className="[&_>_*]:font-semibold [&_>_*]:px-3 min-w-[70px] text-center"
                      >
                        Vencida
                      </Chip>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
