import {
  Await,
  useAsyncValue,
  useFetcher,
  useLoaderData,
} from "react-router-dom";
import { Badge, Card, Group, Skeleton, Stack } from "@mantine/core";
import { DateValue, MonthPickerInput } from "@mantine/dates";
import { IconCalendar, IconWifi } from "@tabler/icons-react";

import { Suspense } from "react";
import { signal } from "@preact/signals-react";

const selectedDate = signal<DateValue>(new Date());

export function InvoiceList() {
  const { response } = useLoaderData() as { response: Promise<object> };

  return (
    <>
      <Group justify="space-between" mb="lg">
        <MonthPickerInput
          leftSection={<IconCalendar />}
          leftSectionPointerEvents="none"
          label="Filtrar por mes"
          value={selectedDate.value}
          onChange={(newDate) => (selectedDate.value = newDate)}
          className="min-w-[200px]"
        />
      </Group>

      <Suspense fallback={<Loading />}>
        <Await resolve={response}>
          {(data) => (
            <>
              <Stack>
                <Card shadow="xs" radius="lg">
                  <Badge
                    variant="light"
                    size="xl"
                    radius="md"
                    className="aspect-square [&_.mantine-Badge-label]:overflow-visible"
                  >
                    <IconWifi />
                  </Badge>
                </Card>
              </Stack>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <Stack>
      {Array.from(Array(5)).map((_, i) => (
        <Skeleton key={i} height={50} />
      ))}
    </Stack>
  );
}
