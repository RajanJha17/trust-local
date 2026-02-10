import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
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
              <li><Link to="/browse" className="hover:text-primary transition-colors">Browse All</Link></li>
              <li><Link to="/browse?cat=jobs" className="hover:text-primary transition-colors">Jobs</Link></li>
              <li><Link to="/browse?cat=rentals" className="hover:text-primary transition-colors">Rentals</Link></li>
              <li><Link to="/browse?cat=services" className="hover:text-primary transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Trust & Safety</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><Link to="/safety-center" className="hover:text-primary transition-colors">Safety Center</Link></li>
              <li><Link to="/safety-guidelines" className="hover:text-primary transition-colors">Safety Tips</Link></li>
              <li><Link to="/trust-score" className="hover:text-primary transition-colors">Trust Scores</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Report a Concern</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/referrals" className="hover:text-primary transition-colors">Referrals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link to="/recommended" className="hover:text-primary transition-colors">AI Features</Link></li>
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
