-- ================================
-- COMPLETE RESET AND RECREATE
-- ================================

-- Drop everything first
DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS newsletter_submissions CASCADE;

-- ================================
-- CONTACT TABLE (SIMPLIFIED)
-- ================================
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  project_details TEXT,
  service_interest TEXT[],
  source TEXT DEFAULT 'portfolio_contact_form',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ================================
-- NEWSLETTER TABLE
-- ================================
CREATE TABLE newsletter_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ================================
-- RLS
-- ================================
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_submissions ENABLE ROW LEVEL SECURITY;

-- ================================
-- POLICIES
-- ================================

-- Contact submissions - allow public insert
CREATE POLICY "Allow public insert" ON contact_submissions
FOR INSERT TO anon WITH CHECK (true);

-- Contact submissions - allow public read
CREATE POLICY "Allow public read" ON contact_submissions
FOR SELECT TO anon USING (true);

-- Newsletter - allow public insert
CREATE POLICY "Allow public newsletter insert" ON newsletter_submissions
FOR INSERT TO anon WITH CHECK (true);

-- Newsletter - allow public read
CREATE POLICY "Allow public newsletter read" ON newsletter_submissions
FOR SELECT TO anon USING (true);

-- ================================
-- TRIGGERS
-- ================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Contact table trigger
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON contact_submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Newsletter table trigger  
CREATE TRIGGER update_newsletter_submissions_updated_at
BEFORE UPDATE ON newsletter_submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
