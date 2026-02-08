import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { UserX, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const blockedUsers = [
  { id: "1", name: "Spam Account", blockedDate: "Jan 15, 2026" },
  { id: "2", name: "Suspicious User", blockedDate: "Dec 20, 2025" },
];

const BlockedUsers = () => {
  const { toast } = useToast();

  const handleUnblock = (name: string) => {
    toast({ title: "User unblocked", description: `${name} has been unblocked.` });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-8">
        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Blocked Users</h1>
        <p className="mb-8 text-muted-foreground font-body">
          Users you've blocked can't message you or see your listings.
        </p>

        {blockedUsers.length === 0 ? (
          <div className="py-16 text-center">
            <UserX className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">No blocked users</p>
            <p className="text-sm text-muted-foreground">You haven't blocked anyone yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {blockedUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-sm font-bold text-destructive">
                  {user.name[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">Blocked on {user.blockedDate}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleUnblock(user.name)}>
                      Unblock User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlockedUsers;
