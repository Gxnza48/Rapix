"use client"

import { useLanguage } from "@/contexts/language-context"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2 text-center md:text-left">
            <img
              src="https://i.ibb.co/hrMJFwL/d4fec341-4851-4613-b384-b6c4400f5cbe-removalai-preview.png"
              alt="RapiX Logo"
              className="h-8 sm:h-20 w-auto mb-3 sm:mb-4 filter invert mx-auto md:mx-0"
            />
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
              {t("footer.description")}
            </p>
          </div>
          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">{t("footer.services")}</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.web-dev")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.mobile-apps")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.cloud-solutions")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.optimization")}
                </a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">{t("footer.company")}</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.support")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">© 2025 RapiX. {t("footer.rights")}</p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
