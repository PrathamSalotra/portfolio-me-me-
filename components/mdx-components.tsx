/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { AlertTriangle, ShieldAlert, Flame } from "lucide-react";

interface FailureModeAlertProps {
  title?: string;
  severity?: "critical" | "high" | "medium";
  children: React.ReactNode;
}

export function FailureModeAlert({
  title = "What Broke / Failure Modes Encountered",
  severity = "high",
  children,
}: FailureModeAlertProps) {
  const borderClass =
    severity === "critical"
      ? "border-red-500/60 bg-red-50 dark:bg-red-950/25"
      : severity === "high"
        ? "border-amber-500/60 bg-amber-50 dark:bg-amber-950/25"
        : "border-primary/60 bg-emerald-50 dark:bg-primary/15";

  const textHeaderClass =
    severity === "critical"
      ? "text-red-700 dark:text-red-400"
      : severity === "high"
        ? "text-amber-700 dark:text-amber-400"
        : "text-primary dark:text-primary";

  return (
    <div
      className={`my-8 p-6 rounded-xl border-l-4 ${borderClass} shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center gap-2.5 mb-3">
        {severity === "critical" ? (
          <Flame className={`w-5 h-5 shrink-0 ${textHeaderClass}`} />
        ) : severity === "high" ? (
          <AlertTriangle className={`w-5 h-5 shrink-0 ${textHeaderClass}`} />
        ) : (
          <ShieldAlert className={`w-5 h-5 shrink-0 ${textHeaderClass}`} />
        )}
        <h4 className={`text-base font-semibold tracking-tight ${textHeaderClass}`}>
          {title}
        </h4>
        <span
          className={`ml-auto text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${severity === "critical"
            ? "border-red-500/40 text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-500/10"
            : "border-amber-500/40 text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10"
            }`}
        >
          {severity} failure
        </span>
      </div>
      <div className="text-sm text-foreground/90 leading-relaxed space-y-2 font-normal">
        {children}
      </div>
    </div>
  );
}

export const mdxComponents = {
  FailureModeAlert,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4 pb-2 border-b border-border flex items-center gap-2"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-lg sm:text-xl font-medium tracking-tight text-foreground mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base text-muted-foreground leading-relaxed my-4"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-outside pl-6 my-4 space-y-2 text-muted-foreground"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-outside pl-6 my-4 space-y-2 text-muted-foreground"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 pl-4 border-l-2 border-primary/50 text-muted-foreground italic bg-card/40 py-2 pr-4 rounded-r-lg"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="px-1.5 py-0.5 rounded-md bg-secondary text-secondary-foreground font-mono text-xs border border-border"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 p-4 rounded-xl bg-card border border-border overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="block my-8 rounded-xl overflow-hidden border border-border/80 shadow-2xl bg-card/80">
      <img
        src={props.src}
        alt={props.alt || "Architecture Diagram"}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      {props.alt && (
        <span className="block px-4 py-2 text-xs font-mono text-center text-muted-foreground bg-secondary/30 border-t border-border">
          {props.alt}
        </span>
      )}
    </span>
  ),
};
