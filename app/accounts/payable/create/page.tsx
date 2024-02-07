import Breadcrumbs from "@/app/ui/Breadcrumbs";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Payable Accounts", href: "/accounts/payable" },
          {
            label: "Create Payable Account",
            href: "/accounts/payable/create",
            active: true,
          },
        ]}
      />
      {/* <Form customers={customers} /> */}
    </main>
  );
}
