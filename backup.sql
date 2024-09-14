--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Homebrew)
-- Dumped by pg_dump version 14.12 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: event; Type: TABLE; Schema: public; Owner: jogdial
--

CREATE TABLE public.event (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    date timestamp with time zone NOT NULL,
    location character varying(255) NOT NULL,
    "volunteersNeeded" integer NOT NULL,
    "volunteersSignedUp" integer DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "trashCollected" integer DEFAULT 0,
    "hoursVolunteered" integer DEFAULT 0
);


ALTER TABLE public.event OWNER TO jogdial;

--
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: jogdial
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.event_id_seq OWNER TO jogdial;

--
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jogdial
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.event.id;


--
-- Name: report; Type: TABLE; Schema: public; Owner: jogdial
--

CREATE TABLE public.report (
    id integer NOT NULL,
    description character varying(255) NOT NULL,
    coordinates character varying(255) NOT NULL,
    image character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.report OWNER TO jogdial;

--
-- Name: report_id_seq; Type: SEQUENCE; Schema: public; Owner: jogdial
--

CREATE SEQUENCE public.report_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.report_id_seq OWNER TO jogdial;

--
-- Name: report_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jogdial
--

ALTER SEQUENCE public.report_id_seq OWNED BY public.report.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: jogdial
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "joinedEvents" json DEFAULT '[]'::json
);


ALTER TABLE public.users OWNER TO jogdial;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: jogdial
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO jogdial;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jogdial
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: event id; Type: DEFAULT; Schema: public; Owner: jogdial
--

ALTER TABLE ONLY public.event ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- Name: report id; Type: DEFAULT; Schema: public; Owner: jogdial
--

ALTER TABLE ONLY public.report ALTER COLUMN id SET DEFAULT nextval('public.report_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: jogdial
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: jogdial
--

COPY public.event (id, title, date, location, "volunteersNeeded", "volunteersSignedUp", "createdAt", "updatedAt", "trashCollected", "hoursVolunteered") FROM stdin;
1	Ready to clean-up river bottom?	2024-10-10 10:30:00+02	near Riba-Roja (Valencia)	10	0	2024-09-02 16:26:16.51+02	2024-09-02 16:26:16.51+02	11	7
2	Collect garbage on the trail (1-2 h)	2024-09-30 16:30:00+02	30 minutes from Andorra (Ripoll)	2	0	2024-09-02 16:33:44.966+02	2024-09-02 16:33:44.966+02	11	7
3	Let's just grab a beer:)	2024-10-05 20:00:00+02	Barcelona	4	1	2024-09-02 16:41:31.22+02	2024-09-02 16:42:26.499+02	11	7
\.


--
-- Data for Name: report; Type: TABLE DATA; Schema: public; Owner: jogdial
--

COPY public.report (id, description, coordinates, image, "createdAt", "updatedAt") FROM stdin;
1	A fallen tree is blocking the trail	39.41217496394505, -0.9913015365600587	uploads/1725280456574-fallen-tree.webp	2024-09-02 14:34:16.604+02	2024-09-02 14:34:16.604+02
2	A large amount of garbage has accumulated 	42.219411590388255, 2.151885330677033	uploads/1725280627090-garbage-trail.jpg	2024-09-02 14:37:07.096+02	2024-09-02 14:37:07.096+02
3	The path is very overgrown, need a chainsaw	42.80350383536093, -6.8796971440315255	uploads/1725280858122-overgrown-trail.webp	2024-09-02 14:40:58.128+02	2024-09-02 14:40:58.128+02
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: jogdial
--

COPY public.users (id, name, email, password, "createdAt", "updatedAt", "joinedEvents") FROM stdin;
1	JogDial	korshunow94@gmail.com	$2b$12$EKswgYKDLwlIYkBXgE5s7ORjtIRyeobc3WAazEVge.17f5CLw7kv6	2024-09-02 16:03:29.803+02	2024-09-02 16:03:29.803+02	[]
\.


--
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jogdial
--

SELECT pg_catalog.setval('public.event_id_seq', 3, true);


--
-- Name: report_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jogdial
--

SELECT pg_catalog.setval('public.report_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jogdial
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: jogdial
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- Name: report report_pkey; Type: CONSTRAINT; Schema: public; Owner: jogdial
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: jogdial
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: jogdial
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

