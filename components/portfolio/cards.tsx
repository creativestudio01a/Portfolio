import type { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience, projects, skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { assetSrc, fadeIn } from "./shared";

export function MetricCard({ detail, label, value }: { detail: string; label: string; value: string }) {
  return (
    <div className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
      <p>{detail}</p>
    </div>
  );
}

export function InfoCard({
  icon: Icon,
  label,
  value
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="info-card">
      <Icon size={22} />
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

export function ServiceCard({
  description,
  icon: Icon,
  title
}: {
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
}) {
  return (
    <motion.article {...fadeIn} className="service-card">
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

export function ProjectCard({ index, project }: { index: number; project: (typeof projects)[number] }) {
  const image = "image" in project ? project.image : undefined;

  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="project-card">
      {image ? (
        <div className="project-media">
          <Image
            src={assetSrc(image.src)}
            alt={image.alt}
            width={1200}
            height={800}
            className={cn("project-media-image", image.fit === "contain" && "project-media-contain")}
          />
        </div>
      ) : (
        <div className="project-mockup" aria-hidden="true">
          <span>{project.number}</span>
          <div />
          <div />
          <div />
        </div>
      )}

      <div className="project-copy">
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span>{project.description}</span>
        <div>
          {project.skills.map((skill) => (
            <small key={skill}>{skill}</small>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ExperienceItem({ index, item }: { index: number; item: (typeof experience)[number] }) {
  const certificate = "certificate" in item ? item.certificate : undefined;

  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="experience-item">
      <div className="experience-meta">
        <span>{item.period}</span>
        <strong>{item.label}</strong>
      </div>
      <div className="experience-copy">
        <p>{item.company}</p>
        <h3>{item.role}</h3>
        {certificate ? (
          <div className="experience-evidence-box">
            <div className="experience-media-item certificate-media-item">
              <Image
                src={assetSrc(certificate.src)}
                alt={certificate.alt}
                width={960}
                height={1280}
                className="experience-media-image"
              />
            </div>
          </div>
        ) : null}
        <span>{item.summary}</span>
        <ul>
          {item.points.map((point) => (
            <li key={point}>
              <Check size={17} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function SkillPanel({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="skill-panel">
      <div>
        <h3>{group.title}</h3>
        <span>{String(group.items.length).padStart(2, "0")}</span>
      </div>
      <p>
        {group.items.map((item) => (
          <small key={item}>{item}</small>
        ))}
      </p>
    </motion.article>
  );
}
