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
  const [loading, setLoading] = useState(false);

  const load = async () => {
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
      <div className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-2 sm:mb-3">
                Back office
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1] text-[#1A2520]">
                Enquiries.
              </h1>
              <p className="mt-2 text-sm text-[#5A6A61]">
                {items.length} total · sorted newest first
              </p>
            </div>
            <button
              onClick={load}
              data-testid="refresh-enquiries"
              className="inline-flex items-center gap-2 border border-[#1E3B2C] text-[#1E3B2C] px-4 sm:px-5 py-2.5 sm:py-3 text-xs uppercase tracking-[0.28em] hover:bg-[#1E3B2C] hover:text-[#F6F5F2] transition-colors w-fit"
            >
              <RefreshCcw strokeWidth={1.5} className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>

          {/* Desktop: Table view */}
          <div className="hidden md:block overflow-x-auto border border-[#D5D1C4] bg-[#EAE7DE]/40">
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

          {/* Mobile: Card view */}
          <div className="md:hidden space-y-3">
            {items.length === 0 && !loading && (
              <div className="p-8 text-center text-[#5A6A61] border border-[#D5D1C4] bg-[#EAE7DE]/40">
                No enquiries yet.
              </div>
            )}
            {items.map((e, idx) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-[#D5D1C4] bg-[#EAE7DE]/40 p-4 space-y-3"
                data-testid={`enquiry-card-${e.id}`}
              >
                {/* Header: Name + Date */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-sm text-[#1A2520]">{e.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#5A6A61] mt-0.5">
                      {formatDate(e.created_at)}
                    </p>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A6A61]">Phone</p>
                    <a href={`tel:${e.phone}`} className="text-[#1A2520] hover:text-[#C46549] inline-flex items-center gap-1 mt-0.5">
                      <Phone strokeWidth={1.5} className="w-3 h-3" />
                      {e.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A6A61]">Package</p>
                    <p className="text-[#1A2520] mt-0.5">{e.package}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A6A61]">Visit Date</p>
                    <p className="text-[#1A2520] mt-0.5">{e.visit_date || "—"}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A6A61]">Guests</p>
                    <p className="text-[#1A2520] mt-0.5">{e.guests ?? "—"}</p>
                  </div>
                  {e.email && (
                    <div className="col-span-2">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A6A61]">Email</p>
                      <p className="text-[#1A2520] mt-0.5 break-all">{e.email}</p>
                    </div>
                  )}
                  {e.message && (
                    <div className="col-span-2">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A6A61]">Message</p>
                      <p className="text-[#1A2520] mt-0.5 leading-relaxed">{e.message}</p>
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2 border-t border-[#D5D1C4]/50">
                  <a
                    href={`tel:${e.phone}`}
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#1E3B2C] hover:text-[#C46549] py-1"
                  >
                    <Phone strokeWidth={1.5} className="w-3 h-3" /> Call
                  </a>
                  <a
                    href={`${BRAND.whatsappBase}?text=Hello%20${encodeURIComponent(
                      e.name
                    )},%20thank%20you%20for%20enquiring%20about%20${encodeURIComponent(
                      e.package
                    )}%20at%20Swarajya%20Farm%20House.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#1E3B2C] hover:text-[#C46549] py-1"
                  >
                    <MessageCircle strokeWidth={1.5} className="w-3 h-3" /> WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
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
