import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">T</span>
              </div>
              Trustly
            </Link>
            <p className="mt-3 text-sm text-muted-foreground font-body">
              Your trust-first hyperlocal marketplace. Buy, sell, hire, and rent from verified people nearby.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><Link to="/browse" className="hover:text-primary">Browse All</Link></li>
              <li><Link to="/browse?cat=jobs" className="hover:text-primary">Jobs</Link></li>
              <li><Link to="/browse?cat=rentals" className="hover:text-primary">Rentals</Link></li>
              <li><Link to="/browse?cat=services" className="hover:text-primary">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Trust & Safety</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#" className="hover:text-primary">How Escrow Works</a></li>
              <li><a href="#" className="hover:text-primary">Verification</a></li>
              <li><a href="#" className="hover:text-primary">Safety Tips</a></li>
              <li><a href="#" className="hover:text-primary">Report a Concern</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground font-body">
          © 2026 Trustly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
