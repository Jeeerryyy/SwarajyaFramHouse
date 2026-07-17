import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { RefreshCcw, Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

function formatDate(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AdminEnquiriesPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);  const load = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const localData = JSON.parse(localStorage.getItem("swarajya_enquiries") || "[]");
      setItems(localData);
    } catch (err) {
      toast.error("Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <main data-testid="admin-page" className="min-h-screen bg-[#F6F5F2]">
      <Navbar />
      <div className="pt-32 md:pt-40 pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-3">
                Back office
              </p>
              <h1 className="font-serif text-4xl md:text-6xl tracking-tighter leading-[1] text-[#1A2520]">
                Enquiries.
              </h1>
              <p className="mt-2 text-sm text-[#5A6A61]">
                {items.length} total · sorted newest first
              </p>
            </div>
            <button
              onClick={load}
              data-testid="refresh-enquiries"
              className="inline-flex items-center gap-2 border border-[#1E3B2C] text-[#1E3B2C] px-5 py-3 text-xs uppercase tracking-[0.28em] hover:bg-[#1E3B2C] hover:text-[#F6F5F2] transition-colors"
            >
              <RefreshCcw strokeWidth={1.5} className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>

          <div className="overflow-x-auto border border-[#D5D1C4] bg-[#EAE7DE]/40">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-[0.28em] text-[#5A6A61] border-b border-[#D5D1C4]">
                  <Th>Received</Th>
                  <Th>Name</Th>
                  <Th>Phone</Th>
                  <Th>Email</Th>
                  <Th>Package</Th>
                  <Th>Date</Th>
                  <Th>Guests</Th>
                  <Th>Message</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 && !loading && (
                  <tr>
                    <td colSpan={9} className="p-10 text-center text-[#5A6A61]">
                      No enquiries yet.
                    </td>
                  </tr>
                )}
                {items.map((e, idx) => (
                  <motion.tr
                    key={e.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                    className="border-b border-[#D5D1C4]/70 hover:bg-[#F6F5F2] transition-colors"
                    data-testid={`enquiry-row-${e.id}`}
                  >
                    <Td className="whitespace-nowrap text-xs">{formatDate(e.created_at)}</Td>
                    <Td className="font-medium">{e.name}</Td>
                    <Td>
                      <a href={`tel:${e.phone}`} className="hover:text-[#C46549] inline-flex items-center gap-1.5">
                        <Phone strokeWidth={1.5} className="w-3 h-3" />
                        {e.phone}
                      </a>
                    </Td>
                    <Td className="text-xs">{e.email || "—"}</Td>
                    <Td>{e.package}</Td>
                    <Td className="text-xs">{e.visit_date || "—"}</Td>
                    <Td>{e.guests ?? "—"}</Td>
                    <Td className="max-w-[280px] truncate text-xs" title={e.message || ""}>
                      {e.message || "—"}
                    </Td>
                    <Td>
                      <div className="flex items-center gap-2">
                        <a
                          href={`${BRAND.whatsappBase}?text=Hello%20${encodeURIComponent(
                            e.name
                          )},%20thank%20you%20for%20enquiring%20about%20${encodeURIComponent(
                            e.package
                          )}%20at%20Swarajya%20Farm%20House.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#1E3B2C] hover:text-[#C46549]"
                        >
                          <MessageCircle strokeWidth={1.5} className="w-3 h-3" /> WA
                        </a>
                      </div>
                    </Td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

const Th = ({ children }) => <th className="p-3 md:p-4 font-normal">{children}</th>;
const Td = ({ children, className = "" }) => (
  <td className={`p-3 md:p-4 align-top text-[#1A2520] ${className}`}>{children}</td>
);
